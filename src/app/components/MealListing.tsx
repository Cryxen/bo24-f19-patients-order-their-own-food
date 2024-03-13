"use client"
import { Meal } from "@/features/meals/types"
import { useState } from "react"

const MealListing = (props: { meal: Meal }) => {
    const [showEditMeal, setShowEditMeal] = useState<Boolean>(false)
    const { meal } = props

    

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
                        <td> <input type="text" value={meal.imageUrl} /> </td>
                        <td> <input type="text" value={meal.mealName} /> </td>
                        <td> <input type="text" value={meal.description} /> </td>
                        <td> <input type="text" value={meal.category} /> </td>
                        <td> <input type="text" value={meal.dietaryInfo} /> </td>
                        <td><button>Lagre</button></td>
                    </tr> : ''
            }
        </>
    )
}
export default MealListing