import * as mealsRepo from './Meals.repository'
export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await mealsRepo.fetchAllMeals();
        return { success: true, data: mealsFromDb.data };
    }
    catch (error) {
        return {success: false, error: "Something went wrong fetching meals from db in service"}
    }
}