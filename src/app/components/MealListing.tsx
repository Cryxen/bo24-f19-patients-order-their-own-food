"use client"
import { Meal } from "@/features/meals/types"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"

const MealListing = (props: { meal: Meal, meals: Meal[], setMeals: Dispatch<SetStateAction<Meal[]>>, setFilteredMeals: Dispatch<SetStateAction<Meal[]>> }) => {
    const [showEditMeal, setShowEditMeal] = useState<Boolean>(false)
    const [mealToChange, setMealToChange] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined',
        dietaryInfo: '',
        imageUrl: ''
    }) //There's probably a much better way to do this  
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
    const handleDietaryInformationChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMealToChange(prev => ({
            ...prev, dietaryInfo: event.target.value
        }))
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
    return (
        <>
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
            </tr>
            {
                showEditMeal ?
                    <tr>
                        <td> <input type="text" value={mealToChange.imageUrl !== null ? mealToChange.imageUrl : ''} onChange={handleImageUrlChange} /> </td>
                        <td> <input type="text" value={mealToChange.mealName} disabled /> </td>
                        <td> <input type="text" value={mealToChange.description} onChange={handleDescriptionChange} /> </td>
                        <td> <MealCategoryRolldownMenu meal={mealToChange} handleCategoryChange={handleCategoryChange} /> </td>
                        <td> <input type="text" value={mealToChange.dietaryInfo !== null ? mealToChange.dietaryInfo : ''} onChange={handleDietaryInformationChange} /> </td>
                        <td><button onClick={handleSaveButton}>Lagre</button></td>
                    </tr> : ''
            }
        </>
    )
}
export default MealListing