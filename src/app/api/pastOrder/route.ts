import * as pastOrderController from '@/features/pastOrder/PastOrder.controller'
import { NextRequest } from 'next/server'
export const POST = async (req: NextRequest) => {
    return (pastOrderController.savePastOrder(req))
}