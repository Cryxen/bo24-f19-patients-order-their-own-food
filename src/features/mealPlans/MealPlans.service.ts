import * as mealPlansRepo from './MealPlans.repository'
import { MealPlan } from './types';

export const fetchAllMealPlans = async () => {
    try {
        const mealPlansFromDb = await mealPlansRepo.fetchAllMealPlans();
        return {success: true, data: mealPlansFromDb?.data}
    } catch (error) {
        return {success: false, error: "Something went wrong fetching meal plans from db in service"}
    }
}

export const saveMealPlan = async (mealPlan: MealPlan) => {
    try {
        const responseFromDb = await mealPlansRepo.saveMealPlan(mealPlan)
        return {success: true, data: responseFromDb?.data, error: responseFromDb?.error}
    } catch (error) {
        return {success: false, error: "Something went wrong saving meal plan to db in service " + error}
    }
}