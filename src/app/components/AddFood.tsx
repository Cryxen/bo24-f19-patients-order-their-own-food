import { Meal } from "@/features/meals/types"
import { ChangeEvent, MouseEvent, useState } from "react"

const AddFood = () => {
    const [meal, setMeal] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined'
    })

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMeal((prev) => ({ ...prev, mealName: event.target.value }))
    }
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMeal((prev) => ({ ...prev, description: event.target.value }))
    }
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMeal((prev) => ({ ...prev, category: event.target.value as Meal["category"] }))
    }

    const submitMealToDB = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (meal.mealName.length > 0 && meal.description.length > 0 && meal.category !== "undefined") {
            const response = await fetch('/api/meals', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(meal)
            })
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
            }
            else
                console.error('Something went wrong calling API to save meal to db')
        }

        console.log(meal)
    }

    return (
        <form>
            <label htmlFor="mealName">Navn på rett:</label>
            <input type="text" id="mealName" placeholder="Navn" value={meal.mealName} onChange={handleNameChange} />
            <label htmlFor="description">Beskrivelse av rett:</label>
            <input type="text" id="description" placeholder="Beskrivelse" value={meal.description} onChange={handleDescriptionChange} />
            <label htmlFor="category">Kategori:</label>
            <select id="category" onChange={handleCategoryChange}>
                {meal.category === 'undefined' ? <option>Velg kategori:</option> : ''}
                <option value="red meat">Rødt kjøtt</option>
                <option value="fish">Fisk</option>
                <option value="chicken">Kylling</option>
                <option value="pasta">Pasta</option>
                <option value="vegetable">Grønnsak</option>
            </select>
            <button onClick={submitMealToDB}>Legg til måltid.</button>
        </form>
    )
}
export default AddFood