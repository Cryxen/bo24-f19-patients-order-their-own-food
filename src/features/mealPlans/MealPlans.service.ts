import * as mealPlansRepo from './MealPlans.repository'

export const fetchAllMealPlans = async () => {
    try {
        const mealPlansFromDb = await mealPlansRepo.fetchAllMealPlans();
        return {success: true, data: mealPlansFromDb?.data}
    } catch (error) {
        return {success: false, error: "Something went wrong fetching meal plans from db in service"}
    }
}