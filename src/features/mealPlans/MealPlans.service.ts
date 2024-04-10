import * as mealPlansRepo from './MealPlans.repository'
import { MealPlan } from './types';

export const fetchAllMealPlans = async () => {
    try {
        const mealPlansFromDb = await mealPlansRepo.fetchAllMealPlans();
        return { success: true, data: mealPlansFromDb?.data }
    } catch (error) {
        return { success: false, error: "Something went wrong fetching meal plans from db in service" }
    }
}


export const saveMealPlan = async (mealPlan: MealPlan) => {
    try {
        const responseFromDb = await mealPlansRepo.saveMealPlan(checkForImageUrl(mealPlan))
        return { success: responseFromDb?.success, data: responseFromDb?.data, error: responseFromDb?.error }
    } catch (error) {
        return { success: false, error: "Something went wrong saving meal plan to db in service " + error }
    }
}

export const updateMealPlan = async (mealPlan: MealPlan) => {
    try {
        const responseFromDb = await mealPlansRepo.updateMealPlan(mealPlan)
        return { success: responseFromDb?.success, data: responseFromDb?.data, error: responseFromDb?.error }

    } catch (error) {
        return { success: false, error: "Failed to update meal plan to db in service " + error }
    }
}
const checkForImageUrl = (mealPlan: MealPlan): MealPlan => {
    if (!mealPlan.imageUrl)
        mealPlan.imageUrl = ''
    return mealPlan
}

export const deleteMealPlan = async (mealPlanId: number) => {
    try {
        console.log("Inside service")
        const responseFromDb = await mealPlansRepo.deleteMealPlan(mealPlanId!)
        return {success: true, data: responseFromDb.data}
    } catch (error) {
        return {success: false, error: "Something went wrong deleting the mealplan in service"}
    }
}

export const fetchMealPlansByDate = async (date: string) => {
    try {
    const responseFromDb = await mealPlansRepo.fetchMealPlansByDate(date)
        return {success: true, data: responseFromDb.data, error: responseFromDb.error}
    } catch (error) {
        return {success: false, error: "Failed to retrieve meal plans from db by date in service " + error}
    }
}