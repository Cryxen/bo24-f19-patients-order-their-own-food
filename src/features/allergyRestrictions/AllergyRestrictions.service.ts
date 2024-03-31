import * as allergyRestrictionsRepo from './AllergyRestrictions.repository'

export const fetchAllAllergyRestrictions = async () => {
    try {
        const allergyRestrictionsFromDb = await allergyRestrictionsRepo.fetchAllAllergyRestrictions()
        return ({ success: allergyRestrictionsFromDb.success, data: allergyRestrictionsFromDb.data, error: allergyRestrictionsFromDb.error })
    } catch (error) {
        return { success: false, error: "Failed to retrieve allergy restrictions from db in service " + error }
    }
}