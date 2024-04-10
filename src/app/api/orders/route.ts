import * as ordersController from '@/features/orders/Orders.controller'
import { NextRequest } from 'next/server'
export async function GET() {
    return await ordersController.fetchAllOrders()
}
export async function POST(req: NextRequest) {
    return await ordersController.saveOrUpdateOrder(req)
}

export async function DELETE(req: NextRequest) {
    return await ordersController.deleteOrder(req)
}