import { NextRequest } from "next/server";
import * as dietaryRestrictionsController from '@/features/dietaryRestrictions/DietaryRestriction.controller'
export const GET = async (req: NextRequest) => {
    return dietaryRestrictionsController.fetchAllDietaryRestricions()
}