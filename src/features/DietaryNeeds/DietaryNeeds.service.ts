import { MVCFetchingError } from '@/libs/errors/MVC-errors'
import * as dietaryNeedsrepo from './DietaryNeeds.repository'

export const fetchAllDietaryNeeds = async () => {
    try {
        const dietaryNeedsFromDb = await dietaryNeedsrepo.fetchAllDietaryNeeds()
        return {
            success: dietaryNeedsFromDb.success, data: dietaryNeedsFromDb.data, error: dietaryNeedsFromDb.error
        }
    } catch (error) {
        return {
            success: false,
            error: MVCFetchingError('dietary needs', 'service', error)
        }
    }
}