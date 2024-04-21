import { NextRequest, NextResponse } from 'next/server'
import * as pastOrderService from './PastOrder.service'
import { PastOrder } from './types'
import { MVCSavingError } from '@/libs/errors/MVC-errors'

export const savePastOrder = async (req: NextRequest) => {
    try {
        const pastOrder = await req.json() as PastOrder
        const responseFromDb = await pastOrderService.savePastOrder(pastOrder)
        return (NextResponse.json({
            status: 200,
            success: responseFromDb.success,
            data: responseFromDb.data,
            error: responseFromDb.error
        }))
    } catch (error) {
        return (NextResponse.json({
            success: false,
            error: MVCSavingError("past order", "controller", error)
        }))
    }

}