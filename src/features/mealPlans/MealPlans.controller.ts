import { NextRequest, NextResponse } from 'next/server'
import * as mealPlansService from './MealPlans.service'
import { MealPlan } from './types'

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

export const saveMealPlan = async (req: NextRequest) => {
    try {
        const mealPlanToSave = await req.json() as MealPlan
        if (mealPlanToSave.id) {
            const responseFromDb = await mealPlanToSave.updateMealPlan(mealPlanToSave)
            return NextResponse.json({
                status: 200,
                success: responseFromDb?.success,
                data: responseFromDb?.data,
                error: responseFromDb?.error
            })
        }
        else {
            const responseFromDb = await mealPlansService.saveMealPlan(mealPlanToSave)
            return NextResponse.json({
                status: 200,
                success: responseFromDb?.success,
                data: responseFromDb?.data,
                error: responseFromDb?.error
            })
        }

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong saving meal plan to db in controller " + error
        })
    }
}