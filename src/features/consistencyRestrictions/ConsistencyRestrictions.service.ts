import { MVCFetchingError } from '@/libs/errors/MVC-errors'
import * as consistencyRestrictionsRepo from './ConsistencyRestrictions.repository'

export const fetchAllConsistencyRestrictions = async () => {
    try {
        const consistencyRestrictionsFromDb = await consistencyRestrictionsRepo.fetchAllConsistencyRestrictions()
        return { success: true, data: consistencyRestrictionsFromDb.data, error: consistencyRestrictionsFromDb.error }
    } catch (error) {
        return {
            success: false, error: MVCFetchingError('consistency restrictions', 'service', error)
        }
    }
}