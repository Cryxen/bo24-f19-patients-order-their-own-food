import { isArray, isString } from 'util';
import * as mealsRepo from './Meals.repository'
import { Meal } from '@prisma/client';
export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await mealsRepo.fetchAllMeals();
        return { success: true, data: mealsFromDb.data };
    }
    catch (error) {
        return { success: false, error: "Something went wrong fetching meals from db in service" }
    }
}

const makeStringToArray = (string: string): string[] => {
    return string.split(',')
}

const makeArrayToString = (array: string[]): string => {
    return array.toString()
}

export const saveMeal = async (meal: Meal) => {
    try {
        if (Array.isArray(meal.dietaryInfo)) {
            meal.dietaryInfo = (makeArrayToString(meal.dietaryInfo))
        }
        const responseFromDb = await mealsRepo.saveMeal(meal)
        return { success: true, data: responseFromDb.data }
    } catch (error) {
        return { success: false, error: "Failed in service to save or update meal to db" }
    }
}

export const deleteMeal = async (mealName: Meal["mealName"]) => {
    try {
        const responseFromDb = await mealsRepo.deleteMeal(mealName)
        return { success: true, data: responseFromDb.data }
    } catch (error) {
        return { success: false, error: "Something went wrong deleting meal: " + mealName + " in service" }
    }
}