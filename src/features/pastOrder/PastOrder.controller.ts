import { NextRequest, NextResponse } from 'next/server'
import * as pastOrderService from './PastOrder.service'
import { PastOrder } from './types'

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
            error: "Something went wrong saving past order to db in controller " + error
        }))
    }

}