import { MVCFetchingError } from '@/libs/errors/MVC-errors';
import * as dietaryRestrictionRepo from './DietaryRestriction.repository'

export const fetchAllDietaryRestricions = async () => {
    try {
        const dietaryRestrictionsFromDb = await dietaryRestrictionRepo.fetchAllDietaryRestricions();
        return ({ success: true, data: dietaryRestrictionsFromDb?.data, error: dietaryRestrictionsFromDb.error })
    } catch (error) {
        return ({
            success: false,
            error: MVCFetchingError('dietary restrictions', 'service', error)
        })
    }
}