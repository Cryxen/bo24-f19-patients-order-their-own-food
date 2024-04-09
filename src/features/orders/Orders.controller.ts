import { NextRequest, NextResponse } from 'next/server'
import * as ordersService from './Orders.service'
import { Order } from './types'

export const fetchAllOrders = async () => {
    try {

        const fetchOrdersFromDb = await ordersService.fetchAllOrders()
        return NextResponse.json({
            success: fetchOrdersFromDb.success,
            status: 200,
            data: fetchOrdersFromDb.data,
            error: fetchOrdersFromDb.error
        })
    }
    catch (error) {
        return NextResponse.json({
            success: false, error: "Failed to fetch orders from db in controller " + error
        })
    }
}

export const saveOrUpdateOrder = async (req: NextRequest) => {
    try {
        const order = await req.json() as Order
        const responseFromDb = await ordersService.saveOrUpdateOrder(order)
        return NextResponse.json({
            status: 200,
            success: responseFromDb.success,
            data: responseFromDb.data,
            error: responseFromDb.error
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong saving or updating order in controller " + error
        })
    }
}