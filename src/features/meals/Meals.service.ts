import { isArray, isString } from 'util';
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

const makeStringToArray = (string:string): string[] => {
    return string.split(',')
}

const makeArrayToString = (array: string[]) : string => {
    return array.toString()
}

export const saveMeal = async (meal: Meal) => {
    try {
        if (Array.isArray(meal.dietaryInfo))
            {
                meal.dietaryInfo = (makeArrayToString(meal.dietaryInfo))
            }
        const resopnseFromDb = await mealsRepo.saveMeal(meal)
        return {success: true, data: resopnseFromDb.data}
    } catch (error) {
        return {success: false, error: "Failed in service to save or update meal to db"}
    }
}