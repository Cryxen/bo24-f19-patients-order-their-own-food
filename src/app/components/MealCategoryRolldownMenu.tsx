import { Meal } from "@/features/meals/types"
import { ChangeEvent } from "react"

interface MealCategoryRolldownMenu {
    meal?: Meal
    handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const MealCategoryRolldownMenu = (props: { meal?: Meal, handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void, filter?: boolean, categoryFilter?: string }) => {
    const { meal = { mealName: '', description: '', category: 'undefined' }, handleCategoryChange, filter = false, categoryFilter } = props
    if (filter) {
        meal.category = categoryFilter as Meal["category"]
    }
    return (
        <select id="category" className="category dropdown" value={meal.category as string} onChange={handleCategoryChange}>
            {
                filter ? <option value="Show all">Vis alle</option> : // if filter is true, show 'vis alle', 
                    meal.category === 'undefined' ? <option>Velg kategori:</option> : '' //If filter is false, show 'velg kategori'
            }
            <option value="red meat">Rødt kjøtt</option>
            <option value="fish">Fisk</option>
            <option value="chicken">Kylling</option>
            <option value="pasta">Pasta</option>
            <option value="vegetable">Grønnsak</option>
        </select>
    )
}
export default MealCategoryRolldownMenu