import { NextRequest, NextResponse } from 'next/server'
import * as mealService from './Meals.service'

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