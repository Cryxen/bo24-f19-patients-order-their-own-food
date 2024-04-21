import * as mealPlanController from '@/features/mealPlans/MealPlans.controller'
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    if (req.nextUrl.searchParams.get('date')) {
        return await mealPlanController.fetchMealPlansByDate(req)
    }
    else
        return await mealPlanController.fetchAllMealPlans(req)
}

export async function POST(req: NextRequest) {
    return await mealPlanController.saveMealPlan(req)
}

export async function DELETE(req: NextRequest) {
    return await mealPlanController.deleteMealPlan(req)
}