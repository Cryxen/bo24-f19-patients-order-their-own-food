import { NextResponse } from 'next/server'
import * as consistencyRestrictionsService from './ConsistencyRestrictions.service'
import { MVCFetchingError } from '@/libs/errors/MVC-errors'

export const fetchAllConsistencyRestrictions = async () => {
    try {
        const consistencyRestrictionsFromDb = await consistencyRestrictionsService.fetchAllConsistencyRestrictions()
        return NextResponse.json({
            status: 200,
            success: consistencyRestrictionsFromDb.success,
            data: consistencyRestrictionsFromDb.data,
            error: consistencyRestrictionsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: MVCFetchingError('consistency restrictions', 'controller', error)

        })
    }
}