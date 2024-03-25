import * as mealPlanController from '@/features/mealPlans/MealPlans.controller'
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    return await mealPlanController.fetchAllMealPlans(req)
}

export async function POST(req: NextRequest) {
    return await mealPlanController.saveMealPlan(req)
}
