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
            <div className="mainDiv">
                <h1>Måltid Planlegging</h1>
                <div className="main-wrapper">
                    <div className="date-container">
                        <div className="date-box">
                            <p>Kostholdsplan for:</p>
                            <DatePicker className="calendar" selected={date} onChange={(date) => setDate(date as Date)} dateFormat="dd/MM/YYYY" />
                        </div>
                        <p className="arrow date-arrow">&#8594;</p>
                    </div>
                    <div className="main-container">
                        {showMealPlans ?
                            <div className="meal-plan-container">
                                {listOfMealPlans?.map(mealPlan =>
                                    <MealPlanList mealPlan={mealPlan} key={mealPlan.id} date={date} setListOfMealPlans={setListOfMealPlans} listOfMealPlans={listOfMealPlans}/>)}
                            </div>
                            :
                            <NewMealPlan date={date} fetchMealPlans={fetchMealPlans}/>
                        }
                        <div className="nutrition-container">
                            <section className="nutrition-graph">
                                <h3>Ernæringsgraf</h3>
                            </section>
                            <section className="nutrition-overview">
                                <h3>Ernæringsoversikt</h3>
                            </section>
                        </div>
                    </div>
                    <div className="config-container">
                        <button className="config-button" onClick={showNewMealPlanForm}>{showMealPlans ? 'Nytt måltid' : 'Se lagrede måltid'}</button>
                        <button className="config-button">Print</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Mealplanning