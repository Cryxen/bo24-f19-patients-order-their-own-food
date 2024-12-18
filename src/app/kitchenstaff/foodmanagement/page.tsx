"use client"
import Layout from "@/app/components/layout"
import '../../styles/foodmanagement.scss'
import { ChangeEvent, useEffect, useState } from "react"
import { Meal } from "@/features/meals/types"
import AddFood from "@/app/components/AddFood"
import MealListing from "@/app/components/MealListing"
import MealCategoryRolldownMenu from "@/app/components/MealCategoryRolldownMenu"
import { isString } from "util"


const Foodmanagement = () => {

    const [meals, setMeals] = useState<Meal[]>([])
    const [filteredMeals, setFilteredMeals] = useState<Meal[]>([])
    const [categoryFilter, setCategoryFilter] = useState<string>()
    const [categoryFilteredMeals, setCategoryFilteredMeals] = useState<Meal[]>([])
    const [nameFilter, setNameFilter] = useState<string>('')
    const [nameFilteredMeals, setNameFilteredMeals] = useState<Meal[]>([])
    const [showLoading, setShowLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchMealsFromAPI()
    }, [])

    useEffect(() => {
        setFilteredMeals(meals)
    }, [meals])

    /**
     * splits string to array
     * @param string string to convert to array
     * @returns array of strings
     */
    const stringToArray = (string: string): string[] => {
        return string.split(',')
    }

    /**
     * Fetches meals from API
     */
    const fetchMealsFromAPI = async () => {
        const response = await fetch('/api/meals')
        if (response.status === 200) {
            const data = await response.json()
            const mealsFromAPI = data?.data as Meal[]
            mealsFromAPI?.forEach(element => {
                if (typeof element.dietaryInfo === 'string')
                    element.dietaryInfo = stringToArray(element.dietaryInfo)
            });

            setMeals(mealsFromAPI)
            setFilteredMeals(mealsFromAPI) //show all meals by default
            setCategoryFilteredMeals(mealsFromAPI)
            setNameFilteredMeals(mealsFromAPI)
            setShowLoading(false)
        }
        else
            console.error('something went wrong fetching meals from API. status code: ' + response.status)
    }

    /**
     * Merges filters upon change
     * @param filter1 Filter 1 
     * @param filter2 Filter 2
     */
    const mergeFilterChange = (filter1: Meal[], filter2: Meal[]) => {
        const filter2MealNames = filter2?.map(meal => meal.mealName)
        setFilteredMeals(
            filter1?.filter(el => filter2MealNames?.includes(el.mealName))
        )
    }

    const handleCategoryFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCategoryFilter(event.target.value)
        if (event.target.value === 'Show all') {
            setCategoryFilteredMeals(meals)
            mergeFilterChange(meals, nameFilteredMeals)
        }
        else {
            const filtered = meals?.filter(el => el.category === event.target.value)
            setCategoryFilteredMeals(filtered)
            mergeFilterChange(filtered, nameFilteredMeals)
        }

    }

    const handleNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNameFilter(event.target.value)
        if (event.target.value.length === 0) {
            console.log("inside if")
            const filtered = meals
            setNameFilteredMeals(meals)
            mergeFilterChange(filtered, categoryFilteredMeals)
        }
        else {
            const filtered = meals?.filter(el => el.mealName.toLowerCase().includes(nameFilter.toLowerCase()))
            setNameFilteredMeals(filtered)
            mergeFilterChange(filtered, categoryFilteredMeals)
        }


    }

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Mat håndtering</h1>
                <div className="main-wrapper">
                    <div className="filter-container">
                        <div className="filter-box">
                            <form className="search-bar">
                                <input type="text" className="search-input" placeholder="Søk" value={nameFilter} onChange={handleNameFilterChange}></input>
                            </form>
                            <MealCategoryRolldownMenu handleCategoryChange={handleCategoryFilterChange} filter={true} categoryFilter={categoryFilter} />
                            <select className="filter dropdown">
                                <option>Velg en filter</option>
                                <option>Filter 1</option>
                                <option>Filter 2</option>
                                <option>Filter 3</option>
                                <option>Filter 4</option>
                            </select>
                        </div>
                        <div className="results-box">
                            <div className="results">
                                <span>Viser resultater:</span>
                            </div>
                            <select className="sort dropdown">
                                <option>Sorteringsmetoder</option>
                                <option>Nyeste</option>
                                <option>Eldste</option>
                                <option>Synkende</option>
                                <option>Stigende</option>
                            </select>
                        </div>
                    </div>
                    <div className="database-container">
                        {showLoading ? <p>Laster måltider.... </p> :
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Matnavn</th>
                                        <th>Beskrivelse</th>
                                        <th>Kategori</th>
                                        <th>Diet info</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMeals?.map((meal) =>
                                        <MealListing meal={meal} setMeals={setMeals} setFilteredMeals={setFilteredMeals} meals={meals} key={meal.mealName} />
                                    )}
                                </tbody>
                            </table>
                        }
                    </div>
                    <div className="config-container">
                        {/* <button>[+] Ny matrett</button> */}
                        <AddFood meals={meals} setMeals={setMeals} fetchMealsFromAPI={fetchMealsFromAPI} />
                        {/* <button>[-] Fjern matrett</button> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Foodmanagement