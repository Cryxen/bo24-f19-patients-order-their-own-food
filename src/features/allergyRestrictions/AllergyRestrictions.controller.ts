import { NextResponse } from 'next/server'
import * as allergyRestrictionsService from './AllergyRestrictions.service'

export const fetchAllAllergyRestrictions = async () => {
    try {
        const allergyRestrictionsFromDb = await allergyRestrictionsService.fetchAllAllergyRestrictions()
        return NextResponse.json({
            status: 200,
            success: allergyRestrictionsFromDb.success,
            data: allergyRestrictionsFromDb.data,
            error: allergyRestrictionsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong fetching allergy restrictions from controller " + error
        })

    }
}