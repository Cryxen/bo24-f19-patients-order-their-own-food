"use client"
import Layout from "@/app/components/layout"
import '../../styles/mealplanning.scss'
import MealPlanList from "@/app/components/MealPlanList"
import { MouseEvent, useEffect, useState } from "react"
import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish, Meal, SIDE_DISH, SideDish } from "@/features/meals/types"
import NewMealPlan from "@/app/components/NewMealPlan"

const Mealplanning = () => {

    const [listOfMealPlans, setListOfMealPlans] = useState<MealPlan[]>([])
    const [showMealPlans, setShowMealPlans] = useState<Boolean>(true)

    useEffect(() => {
        fetchMealPlans()
    }, [])

    const fetchMealPlans = async (): Promise<void> => {
        const response = await fetch('/api/mealPlans')
        if (response.status === 200) {
            const data = await response.json()
            setListOfMealPlans(data.data)
            console.log(data.data)
        }
    }



    const showNewMealPlanForm = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        setShowMealPlans(!showMealPlans)
    }


    return (
        <Layout>
            <div className="gridBox">
                <h1>Måltid Planlegging</h1>
                <section id="mealPlanCalendar">
                    <span>Kostholdsplan for:</span>
                    <select>
                        <option>Kalender</option>
                        <option>Dato 1</option>
                        <option>Dato 2</option>
                        <option>Dato 3</option>
                        <option>Dato 4</option>
                    </select>
                    <span className="arrow">&#8594;</span>
                </section>
                {showMealPlans ?
                    <div className="container">
                        {listOfMealPlans?.map(mealPlan =>
                            <MealPlanList mealPlan={mealPlan} key={mealPlan.id} />)}
                    </div>
                    :
                    <NewMealPlan />
                    // <div className="container">
                    //     <article>
                    //         <h3>
                    //             Hovedrett:
                    //         </h3>
                    //         <form>
                    //             {mealList?.map(meal =>
                    //                 (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                    //                     <div key={meal.mealName}>
                    //                         <label htmlFor={meal.mealName}>{meal.mealName}</label>
                    //                         <input type="radio" id={meal.mealName} value={meal.mealName} name="mainDish" />
                    //                     </div>
                    //                     : ''
                    //             )}
                    //         </form>
                    //     </article>
                    //     <article>
                    //         <h3>
                    //             Siderett:
                    //         </h3>
                    //         <form>
                    //             {mealList?.map(meal =>
                    //                 (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                    //                     <div key={meal.mealName}>
                    //                         <label htmlFor={meal.mealName}>{meal.mealName}</label>
                    //                         <input type="radio" id={meal.mealName} value={meal.mealName} name="sideDish" />
                    //                     </div>
                    //                     : ''
                    //             )}
                    //         </form>
                    //     </article>
                    // </div>
                }
                <div className="break" />
                <article className="nutrition">
                    <section className="graph">
                        <span>Ernæringsgraf</span>
                    </section>
                    <section className="overview">
                        <span>Ernæringsoversikt</span>
                    </section>
                </article>
                <section className="buttons">
                    <button onClick={showNewMealPlanForm}>{showMealPlans ? 'Nytt måltid' : 'Se lagrede måltid'}</button>
                    <button>Fjern måltid</button>
                </section>

            </div>
        </Layout>
    )
}
export default Mealplanning