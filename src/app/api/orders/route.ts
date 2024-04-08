import * as ordersController from '@/features/orders/Orders.controller'
export async function GET() {
    return await ordersController.fetchAllOrders()
}