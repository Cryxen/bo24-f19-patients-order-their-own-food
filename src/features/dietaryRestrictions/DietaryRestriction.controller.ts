import { NextResponse } from 'next/server'
import * as dietaryRestrictionsService from './DietaryRestriction.service'
import { MVCFetchingError } from '@/libs/errors/MVC-errors'

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
            success: false, 
            error: MVCFetchingError('dietary restrictions', 'controller', error)
        })
    }
}