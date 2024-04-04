import { NextResponse } from 'next/server'
import * as dietaryRestrictionsService from './DietaryRestriction.service'

export const fetchAllDietaryRestricions = async () => {
    try {
        const dietaryRestrictionsFromDb = await dietaryRestrictionsService.fetchAllDietaryRestricions()
        return NextResponse.json({
            status: 200,
            success: dietaryRestrictionsFromDb.success,
            data: dietaryRestrictionsFromDb.data,
            error: dietaryRestrictionsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false, error: "Something went wrong fetching dietary restrictions from db in controller " + error
        })
    }
}