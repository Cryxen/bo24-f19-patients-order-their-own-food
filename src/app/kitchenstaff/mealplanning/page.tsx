"use client"
import Layout from "@/app/components/layout";
import '../../styles/mealplanning.scss';
import MealPlanList from "@/app/components/MealPlanList";
import { MouseEvent, useEffect, useState } from "react";
import { MealPlan } from "@/features/mealPlans/types";
import NewMealPlan from "@/app/components/NewMealPlan";
import DatePicker from "react-datepicker";

const Mealplanning = () => {
    const [listOfMealPlans, setListOfMealPlans] = useState<MealPlan[]>([]);
    const [showMealPlans, setShowMealPlans] = useState<Boolean>(true);
    const [date, setDate] = useState<Date>(new Date());
    const [showLoading, setShowLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchMealPlans();
    }, []);

    const fetchMealPlans = async (): Promise<void> => {
        const response = await fetch('/api/mealPlans');
        if (response.status === 200) {
            const data = await response.json();
            setListOfMealPlans(data.data);
            setShowLoading(false)
        }
    };

    const filteredMealPlans = listOfMealPlans.filter((mealPlan) => {
        return new Date(mealPlan.date).toDateString() === date.toDateString();
    });

    const showNewMealPlanForm = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setShowMealPlans(!showMealPlans);
    };

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Måltid Planlegging</h1>
                <div className="main-wrapper">

                    <div className="date-container">
                        <div className="date-box">
                            <p>Kostholdsplan for:</p>
                            <DatePicker className="calendar" selected={date} onChange={(date) => setDate(date as Date)} dateFormat="dd/MM/yyyy" />
                        </div>
                    </div>

                    <div className="main-container">
                        {showLoading ? <p className="meal-plan-container">Laster måltidsplaner....</p> :
                            showMealPlans ? (
                                <div className="meal-plan-container">
                                    {filteredMealPlans.length > 0 ? (
                                        filteredMealPlans.map(mealPlan => (
                                            <MealPlanList mealPlan={mealPlan} key={mealPlan.id} date={date} setListOfMealPlans={setListOfMealPlans} listOfMealPlans={listOfMealPlans} />
                                        ))
                                    ) : (
                                        <p>Finner ingen måltidsplaner for valgt dato</p>
                                    )}
                                </div>
                            ) : (
                                <NewMealPlan date={date} fetchMealPlans={fetchMealPlans} />
                            )}


                        {/* Ikke funkjsonelt i prototype */}
                        <div className="nutrition-container">
                            <h3>NB: Grafer ikke funksjonelle i prototype</h3>
                            <section className="nutrition-graph">
                                <h3>Ernæringsgraf</h3>
                                <img src={'/media/placeholderGraph.png'} alt='Bilde av graf' className="imageGraph"></img>
                            </section>
                            <section className="nutrition-overview">
                                <h3>Ernæringsoversikt</h3>
                                <img src={'/media/barGraph.png'} alt='Bilde av graf' className="imageGraph"></img>
                            </section>
                        </div>
                        {/* Ikke funkjsonelt i prototype */}


                    </div>
                    <div className="config-container">
                        <button className="config-button" onClick={showNewMealPlanForm}>{showMealPlans ? 'Planlegg nytt måltid' : 'Se lagrede måltid'}</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Mealplanning;

