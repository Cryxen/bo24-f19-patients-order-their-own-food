import { MealPlan } from "@/features/mealPlans/types"
import { Order } from "@/features/orders/types"
import { Room } from "@/features/rooms/types"
import { useState, MouseEvent, useEffect, Dispatch, SetStateAction } from "react"

const SingleMealPlan = (props: { mealPlan: MealPlan, selectedRoom: Room, setOrder: Dispatch<SetStateAction<Order | undefined>>, saveOrder: () => void }) => {
    const { mealPlan, selectedRoom, setOrder, saveOrder } = props


    // const [order, setOrder] = useState<Order>({
    //     roomNumber: selectedRoom.roomNumber,
    //     mealPlanId: mealPlan.id!,
    //     mealPlan: mealPlan,
    //     size: "1"
    // })
    const [smallButton, setSmallButton] = useState<boolean>(false)
    const [mediumButton, setMediumButton] = useState<boolean>(false)
    const [largeButton, setLargeButton] = useState<boolean>(false)
    const [showWarning, setShowWarning] = useState<boolean>(false)


    const handleSmallButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        setSmallButton(true)
        setMediumButton(false)
        setLargeButton(false)
        setShowWarning(false)

        setOrder({
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

        setOrder({
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

        setOrder({
            roomNumber: selectedRoom.roomNumber,
            mealPlan: mealPlan,
            mealPlanId: mealPlan.id!,
            size: "1.25"
        })
    }
    const handleOrderButtonPress = (event: MouseEvent<HTMLButtonElement>) => {
        if (smallButton === false && mediumButton === false && largeButton === false) { //Check if a size button has been pressed.
            setShowWarning(true)
        }
        else {
            setShowWarning(false)
            saveOrder()
        }
    }

    return (
        <div className="order-container">
            {showWarning ? <p>Du må velge porsjon størrelse</p> : ''}
            <table className="order-table">
                <tbody>
                    <tr>
                        <td className="display-table">Bilde av mat 1</td>
                        <td className="display-table">{mealPlan.description}</td>
                        <td className="order-config">
                            <select className="portion dropdown">
                                <option className="portion-option">Porsjon</option>
                                <option className="portion-option">Liten</option>
                                <option className="portion-option">Medium</option>
                                <option className="portion-option">Stor</option>
                            </select>
                            <button className="portions select-button" onClick={handleSmallButtonPress}>Liten</button>
                            <button className="portions select-button" onClick={handleMediumButtonPress}>Medium</button>
                            <button className="portions select-button" onClick={handleLargeButtonPress}>Stor</button>
                            <button className="select-button" onClick={handleOrderButtonPress}>Bestill</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default SingleMealPlan