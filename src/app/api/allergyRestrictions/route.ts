import * as allergyRestrictionsController from '@/features/allergyRestrictions/AllergyRestrictions.controller'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
    return await allergyRestrictionsController.fetchAllAllergyRestrictions()
}