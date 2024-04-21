import { NextResponse } from 'next/server'
import * as dietaryNeedsService from './DietaryNeeds.service'
import { MVCFetchingError } from '@/libs/errors/MVC-errors'

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
            error: MVCFetchingError('dietary needs', 'controller', error)
        })
    }
} 