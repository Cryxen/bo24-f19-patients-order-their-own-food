"use client"
import Layout from "@/app/components/layout"
import '../../styles/foodmanagement.scss'
import { useEffect, useState } from "react"
import { Meal } from "@/features/meals/types"
import AddFood from "@/app/components/AddFood"
import MealListing from "@/app/components/MealListing"


const Foodmanagement = () => {

    const [meals, setMeals] = useState<Meal[]>([])

    useEffect(() => {
        fetchMealsFromAPI()
    }, [])

    const fetchMealsFromAPI = async () => {
        const response = await fetch('/api/meals')
        if (response.status === 200) {
            const data = await response.json()
            setMeals(data.data)
        }
        else
            console.error('something went wrong fetching meals from API. status code: ' + response.status)
    }

    console.log(meals)
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Mat håndtering</h1>
                <section>
                    <div>
                        <input type="text" placeholder="Søk"></input>
                        <select name="categories">
                            <option>Velg en kategori</option>
                            <option>Matkategori 1</option>
                            <option>Matkategori 2</option>
                            <option>Matkategori 3</option>
                            <option>Matkategori 4</option>
                        </select>
                        <select name="filters">
                            <option>Velg en filter</option>
                            <option>Filter 1</option>
                            <option>Filter 2</option>
                            <option>Filter 3</option>
                            <option>Filter 4</option>
                        </select>
                    </div>
                    <div className="results">
                        <span>Viser resultater:</span>
                        <select name="sort">
                            <option>Sorteringsmetoder</option>
                            <option>Nyeste</option>
                            <option>Eldste</option>
                            <option>Synkende</option>
                            <option>Stigende</option>
                        </select>
                    </div>
                </section>

                <section className="food-database">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Matnavn</th>
                                <th>Beskrivelse</th>
                                <th>Kategori</th>
                                <th>Andre info</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals?.map((meal) =>
                                <MealListing meal={meal} setMeals={setMeals} meals={meals} key={meal.mealName}/>
                            )}
                        </tbody>
                    </table>
                </section>
                <section className="buttons">
                    <button>Legg til ny matrett</button>
                    <AddFood meals={meals} setMeals={setMeals} />
                    <button>Fjern matrett</button>
                </section>
            </div>
        </Layout>
    )
}
export default Foodmanagement