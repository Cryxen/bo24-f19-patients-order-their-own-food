"use client"
import Layout from "@/app/components/layout"
import '../../styles/foodmanagement.scss'
import { ChangeEvent, useEffect, useState } from "react"
import { Meal } from "@/features/meals/types"
import AddFood from "@/app/components/AddFood"
import MealListing from "@/app/components/MealListing"
import MealCategoryRolldownMenu from "@/app/components/MealCategoryRolldownMenu"


const Foodmanagement = () => {

    const [meals, setMeals] = useState<Meal[]>([])
    const [filteredMeals, setFilteredMeals] = useState<Meal[]>([])
    const [categoryFilter, setCategoryFilter] = useState<string>()

    useEffect(() => {
        fetchMealsFromAPI()
    }, [])

    const fetchMealsFromAPI = async () => {
        const response = await fetch('/api/meals')
        if (response.status === 200) {
            const data = await response.json()
            setMeals(data.data)
            setFilteredMeals(data.data) //show all meals by default
        }
        else
            console.error('something went wrong fetching meals from API. status code: ' + response.status)
    }

    const handleCategoryFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setCategoryFilter(event.target.value)
        if (event.target.value === 'Show all') {
            setFilteredMeals(meals)
        }
        else {
            const filtered = meals.filter(el => el.category === event.target.value)
            setFilteredMeals(filtered)
        }
    }

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Mat håndtering</h1>
                <section>
                    <div>
                        <input type="text" placeholder="Søk"></input>
                        <MealCategoryRolldownMenu handleCategoryChange={handleCategoryFilterChange} filter={true} categoryFilter={categoryFilter} />
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
                            {filteredMeals?.map((meal) =>
                                <MealListing meal={meal} setMeals={setMeals} meals={meals} key={meal.mealName} />
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