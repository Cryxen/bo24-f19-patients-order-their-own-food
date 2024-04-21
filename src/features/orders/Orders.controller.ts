import { NextRequest, NextResponse } from 'next/server'
import * as ordersService from './Orders.service'
import { Order } from './types'
import { MVCDeletingError, MVCFetchingError, MVCSavingError } from '@/libs/errors/MVC-errors'

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
            success: false, error: MVCFetchingError("orders", "controller", error)
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
            error: MVCSavingError("order", "controller", error)
        })
    }
}

export const deleteOrder = async (req: NextRequest) => {

    try {
        if (req.nextUrl.searchParams.get('deleteId')) {
            const deleteId = req.nextUrl.searchParams.get('deleteId')
            const responseFromDb = await ordersService.deleteOrder(parseInt(deleteId as string))
            return NextResponse.json({
                status: 200,
                success: responseFromDb.success,
                error: responseFromDb.error,
                data: responseFromDb.data
            })
        }
        else {
            return NextResponse.json({
                status: 400,
                success: false,
                error: "missing parameter"
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: MVCDeletingError("order", "controller", error)
        })
    }
}