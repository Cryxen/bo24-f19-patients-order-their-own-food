import { isArray, isString } from 'util';
import * as mealsRepo from './Meals.repository'
import { Meal } from './types';
import { MVCDeletingError, MVCFetchingError, MVCSavingError } from '@/libs/errors/MVC-errors';
export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await mealsRepo.fetchAllMeals();
        return { success: true, data: mealsFromDb.data };
    }
    catch (error) {
        return { success: false, error: MVCFetchingError("Meal", "service", error) }
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
        return { success: false, error: MVCSavingError("Meal", "service", error) }
    }
}

export const deleteMeal = async (mealName: Meal["mealName"]) => {
    try {
        const responseFromDb = await mealsRepo.deleteMeal(mealName)
        return { success: true, data: responseFromDb.data }
    } catch (error) {
        return { success: false, error: MVCDeletingError("Meal", "service", error) }
    }
}