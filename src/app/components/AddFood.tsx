import { Meal, dietaryRestrictions } from "@/features/meals/types"
import { ChangeEvent, Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"

const AddFood = (props: { meals: Meal[], setMeals: Dispatch<SetStateAction<Meal[]>>, fetchMealsFromAPI: () => void }) => {
    const { meals, setMeals, fetchMealsFromAPI } = props

    const [meal, setMeal] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined',
        dietaryInfo: []
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

    const handleDietaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setMeal(prev => ({
                ...prev, dietaryInfo: [...(prev.dietaryInfo || []), event.target.value] // Idea from chatGPT to ensure that dietaryInfo is array.
            }))
        }
        else {
            setMeal(prev => ({
                ...prev, dietaryInfo: prev.dietaryInfo?.filter(diet => diet !== event.target.value)
            }))
        }
        console.log(meal)
        console.log(event.target.value)
        console.log(event.target.checked)
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
                setMeals(prev => ([
                    ...prev, meal
                ]))
                fetchMealsFromAPI()
            }
            else
                console.error('Something went wrong calling API to save meal to db')
        }
    }

    return (
        <form className="add-food-container">
            <div>
                <label htmlFor="mealName">Navn på rett: </label>
                <input type="text" id="mealName" placeholder="Navn" value={meal.mealName} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="description">Beskrivelse av rett: </label>
                <input type="text" id="description" placeholder="Beskrivelse" value={meal.description} onChange={handleDescriptionChange} />
            </div>
            <div>
                <label htmlFor="category">Kategori: </label>
                <MealCategoryRolldownMenu meal={meal} handleCategoryChange={handleCategoryChange} />
            </div>
            <fieldset>
                <legend>Følgende dietter kan få utslag på maten:</legend>
                {
                    dietaryRestrictions.map(restrition =>
                        <div key={restrition}>
                            <label htmlFor={restrition}>{restrition}</label>
                            <input type="checkbox" id={restrition} value={restrition} itemID={restrition} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <button onClick={submitMealToDB}>Legg til måltid</button>
        </form>
    )
}
export default AddFood