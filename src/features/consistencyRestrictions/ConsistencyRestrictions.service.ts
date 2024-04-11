import * as consistencyRestrictionsRepo from './ConsistencyRestrictions.repository'

export const fetchAllConsistencyRestrictions = async () => {
    try {
        const consistencyRestrictionsFromDb = await consistencyRestrictionsRepo.fetchAllConsistencyRestrictions()
        return {success: true, data: consistencyRestrictionsFromDb.data, error: consistencyRestrictionsFromDb.error}
    } catch (error) {
        return {success: false, error: "Something went wrong fetching consistency restrictions from db in service " + error}
    }
}