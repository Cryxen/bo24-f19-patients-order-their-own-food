import { Meal } from "@/features/meals/types"
import { ChangeEvent } from "react"

interface MealCategoryRolldownMenu {
    meal?: Meal
    handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const MealCategoryRolldownMenu = (props: { meal?: Meal, handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void, filter?: boolean }) => {
    const { meal = { mealName: '', description: '', category: 'undefined' }, handleCategoryChange, filter = false } = props

    return (
        <select id="category" value={meal.category} onChange={handleCategoryChange}>
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