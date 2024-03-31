import * as intoleranceController from '@/features/intoleranceRestrictions/Intolerance.controller'

export const GET = async () => {
    return await intoleranceController.fetchAllIntolerance()
}