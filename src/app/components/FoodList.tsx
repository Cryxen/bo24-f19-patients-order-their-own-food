"use client"
import { Meal } from "@/features/meals/types"

const FoodList = (props: { meal: Meal }) => {
    const { meal } = props
    
    return (
        <tr>
        <td>{meal.imageUrl}</td>
        <td>{meal.mealName}</td>
        <td>{meal.description}</td>
        <td>{meal.category}</td>
        <td>{meal.dietaryInfo}</td>
        <td><button>Edit</button></td>
    </tr>
    )
}
export default FoodList