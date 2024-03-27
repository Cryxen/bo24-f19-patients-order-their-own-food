"use client"
import Layout from "@/app/components/layout"
import '../../styles/mealplanning.scss'
import MealPlanList from "@/app/components/MealPlanList"
import { MouseEvent, useEffect, useState } from "react"
import { MealPlan } from "@/features/mealPlans/types"
import NewMealPlan from "@/app/components/NewMealPlan"
import DatePicker from "react-datepicker"

const Mealplanning = () => {

    const [listOfMealPlans, setListOfMealPlans] = useState<MealPlan[]>([])
    const [showMealPlans, setShowMealPlans] = useState<Boolean>(true)
    const [date, setDate] = useState<Date>(new Date())
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
                    <DatePicker selected={date} onChange={(date) => setDate(date as Date)} dateFormat="dd/MM/YYYY" />
                    <span className="arrow">&#8594;</span>
                </section>
                {showMealPlans ?
                    <div className="container">
                        {listOfMealPlans?.map(mealPlan =>
                            <MealPlanList mealPlan={mealPlan} key={mealPlan.id} date={date}/>)}
                    </div>
                    :
                    <NewMealPlan date={date} fetchMealPlans={fetchMealPlans}/>
                   
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