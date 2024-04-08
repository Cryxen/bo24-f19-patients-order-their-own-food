import { NextResponse } from 'next/server'
import * as ordersService from './Orders.service'

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