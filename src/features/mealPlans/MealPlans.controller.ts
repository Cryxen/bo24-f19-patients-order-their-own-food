import { NextRequest, NextResponse } from 'next/server'
import * as mealPlansService from './MealPlans.service'

export const fetchAllMealPlans = async (req: NextRequest) => {
    try {
        const mealPlansFromDb = await mealPlansService.fetchAllMealPlans()
        return NextResponse.json({
            status: 200,
            success: mealPlansFromDb.success,
            data: mealPlansFromDb.data,
            error: mealPlansFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong fetching meal plans from db in controller"
        })
    }
}