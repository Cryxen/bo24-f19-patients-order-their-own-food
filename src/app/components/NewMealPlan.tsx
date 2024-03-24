"use client"

import { MAIN_DISH, MainDish, Meal, SIDE_DISH, SideDish } from "@/features/meals/types"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

const NewMealPlan = (props: {date: Date}) => {
    const [mealList, setMealList] = useState<Meal[]>([])
    const [sideDish, setSideDish] = useState<SideDish>()
    const [mainDish, setMainDish] = useState<MainDish>()
    const {date} = props

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

    const chosenMainDish = (event: MouseEvent) => {
        const target = event.target as HTMLInputElement
        setMainDish(target.value as unknown as MainDish)
    }
    const chosenSideDish = (event: MouseEvent) => {
        const target = event.target as HTMLInputElement
        setSideDish(target.value as unknown as SideDish)
    }


    

    return (
        <div className="container">
            <article>
                <h3>
                    Hovedrett:
                </h3>
                <form>
                    {mealList?.map(meal =>
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type="radio" id={meal.mealName} value={meal.mealName} name="mainDish" onClick={chosenMainDish} />
                            </div>
                            : ''
                    )}
                </form>
            </article>
            <article>
                <h3>
                    Siderett:
                </h3>
                <form>
                    {mealList?.map(meal =>
                        (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type="radio" id={meal.mealName} value={meal.mealName} name="sideDish" onClick={chosenSideDish} />
                            </div>
                            : ''
                    )}
                </form>
            </article>
        </div>
    )
}
export default NewMealPlan