import { isArray } from 'util';
import * as mealsRepo from './Meals.repository'
import { Meal } from './types';
export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await mealsRepo.fetchAllMeals();
        return { success: true, data: mealsFromDb.data };
    }
    catch (error) {
        return {success: false, error: "Something went wrong fetching meals from db in service"}
    }
}

const makeArrayString = (array: string[]): string => {
    return array.toString()
} 

export const saveMeal = async (meal: Meal) => {
    try {
        if (Array.isArray(meal.dietaryInfo))
            {
                meal.dietaryInfo = (makeArrayString(meal.dietaryInfo))
            }
        const resopnseFromDb = await mealsRepo.saveMeal(meal)
        return {success: true, data: resopnseFromDb.data}
    } catch (error) {
        return {success: false, error: "Failed in service to save or update meal to db"}
    }
}