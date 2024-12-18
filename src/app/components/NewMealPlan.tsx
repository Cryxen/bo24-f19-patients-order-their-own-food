"use client"

import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish, Meal, SIDE_DISH, SideDish } from "@/features/meals/types"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { POST } from "../api/meals/route"

const NewMealPlan = (props: { date: Date, fetchMealPlans: () => void }) => {
    const [mealList, setMealList] = useState<Meal[]>([])
    const [sideDish, setSideDish] = useState<Meal>()
    const [mainDish, setMainDish] = useState<Meal>()
    const [mealPlantoSave, setMealPlanToSave] = useState<MealPlan>()
    const [description, setDescription] = useState<string>()
    const { date, fetchMealPlans } = props

    useEffect(() => {
        fetchMeals()
    }, [])


    const fetchMeals = async (): Promise<void> => {
        const response = await fetch('/api/meals')
        if (response.status === 200) {
            const data = await response.json()
            setMealList(data.data)
            console.log(data.data)
        }
    }

    const chosenMainDish = (event: ChangeEvent<HTMLSelectElement>): void => {
        const target = event.target
        setMainDish(target.value as unknown as Meal)
    }
    const chosenSideDish = (event: ChangeEvent<HTMLSelectElement>): void => {
        const target = event.target
        setSideDish(target.value as unknown as Meal)
    }



    const handleSaveMealPlanButton = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault()
        const mealPlan: MealPlan = {
            meals: [mainDish as Meal, sideDish as Meal],
            date: date.toDateString(),
            description: description as string
        }
        setMealPlanToSave(mealPlan)
        const response = await fetch('/api/mealPlans', {
            method: 'POST',
            body: JSON.stringify(mealPlan)
        })

        if (response.status === 200) {
            const data = await response.json()
            fetchMealPlans()
            console.log(data)
            alert('Måltid opprettet')
        }
        else
            console.log(response)
    }


    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(event.target.value)
    }



    return (
        <form className="new-meal-container">
            <section className="main-dish-box">
                <h3>Hovedrett:</h3>
                <select onChange={chosenMainDish}>
                    <option>Velg hovedrett</option>

                    {mealList?.map(meal =>
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                            <option key={meal.mealName} value={meal.mealName}>{meal.mealName}</option>
                            : ''
                    )}
                </select>
            </section>
            <section className="side-dish-box">
                <h3>Siderett:</h3>
                <select onChange={chosenSideDish}>
                    <option>Velg siderett</option>
                    {mealList?.map(meal =>
                        (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                            <option key={meal.mealName} value={meal.mealName}>{meal.mealName}</option>
                            : ''
                    )}
                </select>
            </section>
            <section className="description-box">
                <label htmlFor="descriptionOfMealPlan">Beskrivelse:</label>
                <textarea className="description-meal-plan" id="descriptionOfMealPlan" value={description} onChange={handleDescriptionChange} />
            </section>
            <button className="config-button" onClick={handleSaveMealPlanButton}>Lagre måltid</button>
        </form>
    )
}
export default NewMealPlan