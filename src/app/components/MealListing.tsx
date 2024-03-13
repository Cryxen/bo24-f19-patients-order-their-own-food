"use client"
import { Meal } from "@/features/meals/types"
import { ChangeEvent, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"

const MealListing = (props: { meal: Meal }) => {
    const [showEditMeal, setShowEditMeal] = useState<Boolean>(false)
    const { meal } = props

    

    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {

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
                        <td> <input type="text" value={meal.imageUrl} /> </td>
                        <td> <input type="text" value={meal.mealName} /> </td>
                        <td> <input type="text" value={meal.description} /> </td>
                        <td> <MealCategoryRolldownMenu meal={meal} handleCategoryChange={handleCategoryChange}/> </td>
                        <td> <input type="text" value={meal.dietaryInfo} /> </td>
                        <td><button>Lagre</button></td>
                    </tr> : ''
            }
        </>
    )
}
export default MealListing