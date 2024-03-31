import * as dietaryNeedsrepo from './DietaryNeeds.repository'

export const fetchAllDietaryNeeds = async () => {
    try {
        const dietaryNeedsFromDb = await dietaryNeedsrepo.fetchAllDietaryNeeds()
        return {
            success: dietaryNeedsFromDb.success, data: dietaryNeedsFromDb.data, error: dietaryNeedsFromDb.error
        }
    } catch (error) {
        return {
            success: false, error: "Failed to fetch dietary needs from db in service " + error
        }
    }
}