import * as intoleranceRepo from './Intolerance.repository'

export const fetchAllIntolerance = async () => {
    try {
        const intoleranceFromDb = await intoleranceRepo.fetchAllIntolerance()
        return {
            success: intoleranceFromDb.success, data: intoleranceFromDb.data, error: intoleranceFromDb.error
        }
    } catch (error) {
        return {
            success: false, error: "Failed to retrieve intolerance from db in service " + error
        }
    }
}