"use client"
import { Meal, dietaryRestrictions } from "@/features/meals/types"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"
import ConfirmationWindow from "./ComfirmationWindow"

const MealListing = (props: { meal: Meal, meals: Meal[], setMeals: Dispatch<SetStateAction<Meal[]>>, setFilteredMeals: Dispatch<SetStateAction<Meal[]>> }) => {
    const [showEditMeal, setShowEditMeal] = useState<Boolean>(false)
    const [mealToChange, setMealToChange] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined',
        dietaryInfo: '',
        imageUrl: ''
    }) //There's probably a much better way to do this  
    const [showConfirmationWindow, setShowConfirmationWindow] = useState<Boolean>(false)
    const { meal, meals, setMeals, setFilteredMeals } = props


    useEffect(() => {
        setMealToChange(meal)
    }, [])


    const findMealIndex = (): number => {
        return meals.findIndex((el) => el.mealName === meal.mealName)
    }

    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setMealToChange(prev => ({
            ...prev, category: event.target.value as Meal["category"]
        }))
        console.log(mealToChange)
    }

    const handleImageUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMealToChange(prev => ({
            ...prev, imageUrl: event.target.value
        }))
    }
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMealToChange(prev => ({
            ...prev, description: event.target.value
        }))
    }

    // Seems unused, TODO: Find out if can be deleted.
    const handleDietaryInformationChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMealToChange(prev => ({
            ...prev, dietaryInfo: event.target.value
        }))
    }

    const handleDeleteMealButton = async (event: MouseEvent<HTMLButtonElement>) => {
        // Show confirmation window
        event.preventDefault()
        setShowConfirmationWindow(true)
    }

    const handleConfirmButtonPress = async () => {
        setShowConfirmationWindow(false)
        const response = await fetch('/api/meals?mealName=' + meal.mealName, {
            method: "DELETE"
        })
        if (response.status === 200) {
            const mealsWithoutDeletedMeal: Meal[] = meals.filter(el => el.mealName !== meal.mealName)
            setMeals(mealsWithoutDeletedMeal)
            const data = await response.json()
            console.log(data)
        }
        else
            console.error("Something went wrong with deleting meal: " + meal.mealName + " from db")
    }

    const handleDeclineButtonPress = () => {
        setShowConfirmationWindow(false)
    }


    const handleSaveButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(mealToChange)
        if (meal.mealName.length > 0 && meal.description.length > 0 && meal.category !== "undefined") {
            const response = await fetch('/api/meals', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mealToChange)
            })
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                setMeals(prev => {
                    const copyMealsArray = [...prev];
                    copyMealsArray[findMealIndex()] = mealToChange
                    return copyMealsArray
                })
                setFilteredMeals(prev => {
                    const copyMealsArray = [...prev];
                    copyMealsArray[findMealIndex()] = mealToChange
                    return copyMealsArray
                })
                setShowEditMeal(false)
            }
            else
                console.error('Something went wrong calling API to save meal to db')

        }
    }


    const handleDietaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setMealToChange(prev => ({
                ...prev, dietaryInfo: [...(prev.dietaryInfo || []), event.target.value] // Idea from chatGPT to ensure that dietaryInfo is array.
            }))
        }
        else {
            setMealToChange(prev => ({
                ...prev, dietaryInfo: prev.dietaryInfo?.filter(diet => diet !== event.target.value)
            }))
        }
        console.log(meal)
        console.log(event.target.value)
        console.log(event.target.checked)
    }



    return (
        <>
            {showConfirmationWindow ? <ConfirmationWindow message={"Er du sikker på at du ønsker å slette?"} confirmButton={"Ja"} declineButton={"Nei"} handleConfirmButtonPress={handleConfirmButtonPress} handleDeclineButtonPress={handleDeclineButtonPress} /> : ''}
            <tr>
                <td>{meal.imageUrl}</td>
                <td>{meal.mealName}</td>
                <td>{meal.description}</td>
                <td>{meal.category}</td>
                <td>
                    <ul>
                        {
                            Array.isArray(meal.dietaryInfo) ?
                                meal.dietaryInfo.map(el =>
                                    <li key={el}>{el}</li>
                                ) : ''
                        }
                    </ul>
                </td>
                <td><button onClick={() => setShowEditMeal(!showEditMeal)}>Edit</button></td>
                <td><button onClick={handleDeleteMealButton}>Slett rett</button></td>
            </tr>
            {
                showEditMeal ?
                    <tr>
                        <td> <input type="text" value={mealToChange.imageUrl !== null ? mealToChange.imageUrl : ''} onChange={handleImageUrlChange} /> </td>
                        <td> <input type="text" value={mealToChange.mealName} disabled /> </td>
                        <td> <input type="text" value={mealToChange.description} onChange={handleDescriptionChange} /> </td>
                        <td> <MealCategoryRolldownMenu meal={mealToChange} handleCategoryChange={handleCategoryChange} /> </td>
                        <td>{dietaryRestrictions.map(restriction =>
                            <div key={restriction}>
                                <label htmlFor={restriction}>{restriction}</label>
                                <input type="checkbox" key={restriction} value={restriction} itemID={restriction} onChange={handleDietaryChange} checked={mealToChange.dietaryInfo?.includes(restriction) ? true : false} />
                            </div>
                        )}
                        </td>
                        <td><button onClick={handleSaveButton}>Lagre</button></td>
                    </tr> : ''
            }
        </>
    )
}
export default MealListing