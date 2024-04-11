import * as dietaryRestrictionRepo from './DietaryRestriction.repository'

export const fetchAllDietaryRestricions = async () => {
    try {
        const dietaryRestrictionsFromDb = await dietaryRestrictionRepo.fetchAllDietaryRestricions();
        return ({ success: true, data: dietaryRestrictionsFromDb?.data, error: dietaryRestrictionsFromDb.error })
    } catch (error) {
        return ({ success: false, error: "Failed to retrieve dietary restrictrions from db in service " + error })
    }
}