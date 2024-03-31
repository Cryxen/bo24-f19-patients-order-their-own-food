import { NextResponse } from 'next/server'
import * as intoleranceService from './Intolerance.service'

export const fetchAllIntolerance = async () => {
    try {
        const intoleranceFromDb = await intoleranceService.fetchAllIntolerance()
        console.log(intoleranceFromDb)
        return NextResponse.json({
            status: 200,
            success: intoleranceFromDb.success,
            data: intoleranceFromDb.data,
            error: intoleranceFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Failed to retrieve intolerance from db in controller " + error
        })
    }
}