import { NextResponse } from 'next/server'
import * as dietaryNeedsService from './DietaryNeeds.service'

export const fetchAllDietaryNeeds = async () => {
    try {
        const dietaryNeedsFromDb = await dietaryNeedsService.fetchAllDietaryNeeds()
        return NextResponse.json({
            status: 200,
            success: dietaryNeedsFromDb.success,
            data: dietaryNeedsFromDb.data,
            error: dietaryNeedsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to fetch dietary needs from db in controller " + error
        })
    }
} 