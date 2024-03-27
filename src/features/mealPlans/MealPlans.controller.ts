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
            const responseFromDb = await mealPlansService.updateMealPlan(mealPlanToSave)
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


export const deleteMealPlan = async (req: NextRequest) => {
    try {
        if (req.nextUrl.searchParams.get('mealPlanId')) {
            console.log("Inside controller")
            const mealPlanId = req.nextUrl.searchParams.get('mealPlanId')
            const responseFromDb = await mealPlansService.deleteMealPlan(parseInt(mealPlanId!))
            return NextResponse.json({
                status: 200,
                success: responseFromDb?.success,
                data: responseFromDb?.data,
                error: responseFromDb?.error
            })
        }
        else NextResponse.json({
            success: false, status: 400, error: "Missing parameter "
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong deleting meal plan from db in controller " + error
        })
    }
}