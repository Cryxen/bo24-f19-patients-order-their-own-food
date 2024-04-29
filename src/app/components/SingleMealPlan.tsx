import { MealPlan } from "@/features/mealPlans/types"
import { Order } from "@/features/orders/types"
import { Room } from "@/features/rooms/types"
import { useState, MouseEvent, useEffect, Dispatch, SetStateAction } from "react"

const SingleMealPlan = (props: { mealPlan: MealPlan, selectedRoom: Room, setOrder: Dispatch<SetStateAction<Order | undefined>>, saveOrder: () => void}) => {
    const { mealPlan, selectedRoom, setOrder, saveOrder} = props

    const [allergies, setAllergies] = useState<boolean>(false)
    const [smallButton, setSmallButton] = useState<boolean>(false)
    const [mediumButton, setMediumButton] = useState<boolean>(false)
    const [largeButton, setLargeButton] = useState<boolean>(false)
    const [showWarning, setShowWarning] = useState<boolean>(false)
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [showSelectedSize, setShowSelectedSize] = useState<boolean>(true);

    useEffect(() => {
        checkForAllergies()
    }, [])

    const checkForAllergies = () => {
        mealPlan.meals.map(meal => {
            console.log(meal.meal?.dietaryInfo)
            if (typeof meal.meal?.dietaryInfo === "string") {
                const arrayOfDietaryInfo = meal.meal.dietaryInfo.split(",")

                /**
                 * Iterate through all restrictions to try and find a match. 
                 * if Match = setAllergies true.
                 */

                arrayOfDietaryInfo.forEach(element => {
                    selectedRoom.allergyRestrictions.forEach(allergy => {
                        console.log(element)
                        console.log(allergy)
                        if (element === allergy.allergyRestricionId)
                            setAllergies(true)
                    });
                    selectedRoom.consistancyRestrictions.forEach(consistancy => {
                        if (element === consistancy.foodConsistencyRestrictionId)
                            setAllergies(true)
                    })
                    selectedRoom.dietaryNeeds.forEach(dietaryNeed => {
                        if (element === dietaryNeed.dietaryNeedId)
                            setAllergies(true)
                    })
                    selectedRoom.dietaryRestrictions.forEach(dietaryRestriction => {
                        if (element === dietaryRestriction.dietaryRestrictionId)
                            setAllergies(true)
                    })
                    selectedRoom.intoleranceRestrictions.forEach(intolerance => {
                        if (element === intolerance.intolleranceRestrictionId)
                            setAllergies(true)
                    })
                });
            }
        })
    }

    const handleSmallButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        setSmallButton(true)
        setMediumButton(false)
        setLargeButton(false)
        setShowWarning(false)
        setSelectedSize("Liten");

        setOrder({
            id: 0,
            roomNumber: selectedRoom.roomNumber,
            mealPlan: mealPlan,
            mealPlanId: mealPlan.id!,
            size: "0.75"
        })
    }
    const handleMediumButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        setSmallButton(false)
        setMediumButton(true)
        setLargeButton(false)
        setShowWarning(false)
        setSelectedSize("Medium");

        setOrder({
            id: 0,
            roomNumber: selectedRoom.roomNumber,
            mealPlan: mealPlan,
            mealPlanId: mealPlan.id!,
            size: "1"
        })
    }
    const handleLargeButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        setSmallButton(false)
        setMediumButton(false)
        setLargeButton(true)
        setShowWarning(false)
        setSelectedSize("Stor");

        setOrder({
            id: 0,
            roomNumber: selectedRoom.roomNumber,
            mealPlan: mealPlan,
            mealPlanId: mealPlan.id!,
            size: "1.25"
        })
    }
    const handleOrderButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        if (smallButton === false && mediumButton === false && largeButton === false) { //Sjekker om størrelsesknapp er valgt
            setShowWarning(true)
        }
        else {
            setShowWarning(false)
            saveOrder()
            alert(`${selectedSize} rett bestilt til rom ${selectedRoom.roomNumber}. Returnerer til hovedmeny`);
            setShowSelectedSize(false);
        }
    }

    return (
        <div className={allergies ? "red order-container" : "order-container"}>
            {showWarning ? <p>Du må velge porsjon størrelse</p> : ''}
            <table className="order-table">
                <tbody>
                    <tr>
                        <td className="display-table"><img src={'/media/placeholderfood.webp'} alt='Bilde måltid' className="imageFood"></img></td>
                        <td className="display-table table-description">{mealPlan.description}</td>
                        <td className="order-config">
                            <button className="portions select-button" onClick={handleSmallButtonPress}>Liten</button>
                            <button className="portions select-button" onClick={handleMediumButtonPress}>Medium</button>
                            <button className="portions select-button" onClick={handleLargeButtonPress}>Stor</button>
                            <button className="select-button" onClick={handleOrderButtonPress}>Bestill</button>
                        </td>
                        {showSelectedSize && selectedSize && <p className="selectedSizeP">Valgt størrelse: {selectedSize}</p>}
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
export default SingleMealPlan