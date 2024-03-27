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

    const chosenMainDish = (event: MouseEvent): void => {
        const target = event.target as HTMLInputElement
        setMainDish(target.value as unknown as Meal)
    }
    const chosenSideDish = (event: MouseEvent): void => {
        const target = event.target as HTMLInputElement
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
        }
        else
            console.log(response)
    }


    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(event.target.value)
    }



    return (
        <div className="container">
            <form>
                <section>
                    <h3>
                        Hovedrett:
                    </h3>
                    {mealList?.map(meal =>
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type="radio" id={meal.mealName} value={meal.mealName} name="mainDish" onClick={chosenMainDish} />
                            </div>
                            : ''
                    )}
                </section>
                <section>
                    <h3>
                        Siderett:
                    </h3>
                    {mealList?.map(meal =>
                        (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type="radio" id={meal.mealName} value={meal.mealName} name="sideDish" onClick={chosenSideDish} />
                            </div>
                            : ''
                    )}
                </section>
                <section>
                    <label htmlFor="descriptionOfMealPlan">Beskrivelse:</label>
                    <textarea id="descriptionOfMealPlan" value={description} onChange={handleDescriptionChange} />
                </section>
                <button onClick={handleSaveMealPlanButton}>Lagre måltid</button>
            </form>
        </div>
    )
}
export default NewMealPlan