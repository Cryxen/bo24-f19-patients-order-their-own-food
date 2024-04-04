import * as consistencyRestrictionsController from '@/features/consistencyRestrictions/ConsistencyRestrictions.controller'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
    return await consistencyRestrictionsController.fetchAllConsistencyRestrictions()
}