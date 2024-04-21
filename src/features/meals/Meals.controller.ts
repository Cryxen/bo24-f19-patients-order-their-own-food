import { NextRequest, NextResponse } from 'next/server'
import * as mealService from './Meals.service'
import { Meal } from './types'
import { MVCDeletingError, MVCFetchingError, MVCSavingError } from '@/libs/errors/MVC-errors'

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
            error: MVCFetchingError("Meal", "controller", error)
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
            success: false, error: MVCSavingError("Meal", "controller", error)
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
            success: false, error: MVCDeletingError("Meal", "controller", error)
        })
    }
}