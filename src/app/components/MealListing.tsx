"use client"
import { Meal } from "@/features/meals/types"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"

const MealListing = (props: { meal: Meal }) => {
    const [showEditMeal, setShowEditMeal] = useState<Boolean>(false)
    const [mealToChange, setMealToChange] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined',
        dietaryInfo: '',
        imageUrl: ''
    }) //There's probably a much better way to do this  
    const { meal } = props

    useEffect(() => {
        setMealToChange(meal)
    }, [])

    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMealToChange(prev => ({
            ...prev, category: event.target.value as Meal["category"]
        }))
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
                // setMeals(prev => ([
                //     ...prev, meal
                // ]))
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
                    <td>{meal.dietaryInfo}</td>
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