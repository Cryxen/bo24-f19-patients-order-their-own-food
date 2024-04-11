import { NextRequest, NextResponse } from 'next/server'
import * as mealService from './Meals.service'
import { Meal } from '@prisma/client'

export const fetchAllMeals = async (req: NextRequest) => {
    try {
        const mealsFromDb = await mealService.fetchAllMeals()
        return NextResponse.json({
            status: 200,
            success: mealsFromDb.success,
            data: mealsFromDb.data,
            error: mealsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "something went wrong fetching meals from db in controller"
        })
    }
}

export const saveMeal = async (req: NextRequest) => {
    try {
        const mealToSave = await req.json() as Meal
        const responseFromDb = await mealService.saveMeal(mealToSave)
        return NextResponse.json({
            status: 200,
            success: responseFromDb.success,
            data: responseFromDb?.data,
            error: responseFromDb?.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false, error: "Something went wrong saving meal in meal controller"
        })
    }
}

export const deleteMeal = async (req: NextRequest) => {
    try {
        if (req.nextUrl.searchParams.get('mealName')) {
            const mealName = req.nextUrl.searchParams.get('mealName') as string
            const responseFromDb = await mealService.deleteMeal(mealName)
            return NextResponse.json({
                status: 200,
                success: responseFromDb.success,
                data: responseFromDb?.data,
                error: responseFromDb?.error
            })
        }
        else
            return NextResponse.json({
                success: false, status: 400, error: "Missing parameter"
            })
    } catch (error) {
        return NextResponse.json({
            success: false, error: "API call to delete failed in meals controller"
        })
    }
}