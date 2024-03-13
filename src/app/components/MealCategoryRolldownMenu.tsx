import { Meal } from "@/features/meals/types"
import { ChangeEvent } from "react"

const MealCategoryRolldownMenu = (props: { meal: Meal, handleCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void }) => {
    const { meal, handleCategoryChange } = props
    return (
        <select id="category" value={meal.category} onChange={handleCategoryChange}>
            {meal.category === 'undefined' ? <option>Velg kategori:</option> : ''}
            <option value="red meat">Rødt kjøtt</option>
            <option value="fish">Fisk</option>
            <option value="chicken">Kylling</option>
            <option value="pasta">Pasta</option>
            <option value="vegetable">Grønnsak</option>
        </select>
    )
}
export default MealCategoryRolldownMenu