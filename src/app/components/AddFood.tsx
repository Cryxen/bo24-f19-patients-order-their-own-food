import { Meal, dietaryRestrictions } from "@/features/meals/types"
import { ChangeEvent, Dispatch, MouseEvent, MouseEventHandler, SetStateAction, useEffect, useState } from "react"
import MealCategoryRolldownMenu from "./MealCategoryRolldownMenu"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"
import { Allergy } from "@/features/allergyRestrictions/types"
import { Intolerance } from "@/features/intoleranceRestrictions/types"
import { DietaryNeeds } from "@/features/DietaryNeeds/types"

const AddFood = (props: { meals: Meal[], setMeals: Dispatch<SetStateAction<Meal[]>>, fetchMealsFromAPI: () => void }) => {
    const { meals, setMeals, fetchMealsFromAPI } = props
    const [dietaryRestrictionsFromDb, setDietaryRestrictionsFromDb] = useState<DietaryRestriction[]>([])
    const [consistencyRestrictionsFromDb, setConsistencyRestrictionsFromDb] = useState<FoodConsistency[]>([])
    const [allergyRestrictionsFromDb, setAllergyRestrictionsFromDb] = useState<Allergy[]>([])
    const [intoleranceRestrictionsFromDb, setIntoleranceRestrictionsFromDb] = useState<Intolerance[]>([])
    const [dietaryNeedsFromDb, setDietaryNeedsFromDb] = useState<DietaryNeeds[]>([])
    const [meal, setMeal] = useState<Meal>({
        mealName: '',
        description: '',
        category: 'undefined',
        dietaryInfo: []
    })

    useEffect(() => {
        fetchAllDietaryRestrictions()
        fetchAllConsistencyRestrictions()
        fetchAllAllergyRestrictions()
        fetchAllIntoleranceRestrictions()
        fetchAllDietaryNeeds()
    }, [])

    const fetchAllDietaryRestrictions = async () => {
        const response = await fetch('/api/dietaryRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setDietaryRestrictionsFromDb(data.data)
        }
    }

    const fetchAllConsistencyRestrictions = async () => {
        const response = await fetch('/api/consistencyRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setConsistencyRestrictionsFromDb(data.data)
        }
    }

    const fetchAllAllergyRestrictions = async () => {
        const response = await fetch('/api/allergyRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setAllergyRestrictionsFromDb(data.data)
        }
    }

    const fetchAllIntoleranceRestrictions = async () => {
        const response = await fetch('/api/intoleranceRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setIntoleranceRestrictionsFromDb(data.data)
        }
    }

    const fetchAllDietaryNeeds = async () => {
        const response = await fetch('/api/dietaryNeeds')
        if (response.status === 200) {
            const data = await response.json()
            setDietaryNeedsFromDb(data.data)
        }
    }

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
                ...prev, dietaryInfo: [...(prev.dietaryInfo as []), event.target.value] // Idea from chatGPT to ensure that dietaryInfo is array.
            }))
        }
        else {
            setMeal(prev => ({
                ...prev, dietaryInfo: (prev.dietaryInfo as [])?.filter(diet => diet !== event.target.value)
            }))
        }
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
            
            <fieldset className="food-fieldset">
                <legend className="food-legend">Følgende diett restriksjoner kan få utslag på maten</legend>
                {
                    dietaryRestrictionsFromDb.map(restriction =>
                        <div className="restriction-box" key={restriction.dietaryRestriction}>
                            <label htmlFor={restriction.dietaryRestriction}>{restriction.dietaryRestriction}</label>
                            <input type="checkbox" id={restriction.dietaryRestriction} value={restriction.dietaryRestriction} itemID={restriction.dietaryRestriction} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <fieldset className="food-fieldset">
                <legend className="food-legend">Følgende konsistens kan få utslag på maten</legend>
                {
                    consistencyRestrictionsFromDb.map(restriction =>
                        <div className="restriction-box" key={restriction.consistency}>
                            <label htmlFor={restriction.consistency}>{restriction.consistency}</label>
                            <input type="checkbox" id={restriction.consistency} value={restriction.consistency} itemID={restriction.consistency} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <fieldset className="food-fieldset">
                <legend className="food-legend">Følgende allergier kan få utslag på maten</legend>
                {
                    allergyRestrictionsFromDb.map(restriction =>
                        <div className="restriction-box" key={restriction.allergy}>
                            <label htmlFor={restriction.allergy}>{restriction.allergy}</label>
                            <input type="checkbox" id={restriction.allergy} value={restriction.allergy} itemID={restriction.allergy} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <fieldset className="food-fieldset">
                <legend className="food-legend">Følgende intolerans restriksjoner kan få utslag på maten</legend>
                {
                    intoleranceRestrictionsFromDb.map(restriction =>
                        <div className="restriction-box" key={restriction.intolerance}>
                            <label htmlFor={restriction.intolerance}>{restriction.intolerance}</label>
                            <input type="checkbox" id={restriction.intolerance} value={restriction.intolerance} itemID={restriction.intolerance} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <fieldset className="food-fieldset">
                <legend className="food-legend">Følgende konstbehov kan gjelde maten</legend>
                {
                    dietaryNeedsFromDb.map(restriction =>
                        <div className="restriction-box" key={restriction.dietaryNeed}>
                            <label htmlFor={restriction.dietaryNeed}>{restriction.dietaryNeed}</label>
                            <input type="checkbox" id={restriction.dietaryNeed} value={restriction.dietaryNeed} itemID={restriction.dietaryNeed} onChange={handleDietaryChange} />
                        </div>
                    )
                }
            </fieldset>
            <button onClick={submitMealToDB}>Legg til måltid</button>
        </form>
    )
}
export default AddFood