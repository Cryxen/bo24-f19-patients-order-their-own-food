import { NextResponse } from 'next/server'
import * as intoleranceService from './Intolerance.service'
import { MVCFetchingError } from '@/libs/errors/MVC-errors'

export const fetchAllIntolerance = async () => {
    try {
        const intoleranceFromDb = await intoleranceService.fetchAllIntolerance()
        return NextResponse.json({
            status: 200,
            success: intoleranceFromDb.success,
            data: intoleranceFromDb.data,
            error: intoleranceFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: MVCFetchingError('intolerance restrictions', 'controller', error)
        })
    }
}