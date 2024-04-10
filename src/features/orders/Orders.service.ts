import * as ordersRepository from './Orders.repository'
import { Order } from './types'

export const fetchAllOrders = async () => {
    try {
        const fetchOrdersFromDb = await ordersRepository.fetchAllOrders()
        return ({ success: true, data: fetchOrdersFromDb.data, error: fetchOrdersFromDb.error })
    } catch (error) {
        return ({ success: false, error: "Failed to fetch orders from db in service " + error })
    }
}

export const saveOrUpdateOrder = async (order: Order) => {
    try {
        const responseFromDb = await ordersRepository.saveOrUpdateOrder(order)
        return ({ success: true, data: responseFromDb.data, error: responseFromDb.error })
    } catch (error) {
        return ({ success: false, error: "Something went wrong saving or updating to database in service " + error })
    }
}

export const deleteOrder = async (orderId: number) => {
    try {
        const responseFromDb = await ordersRepository.deleteOrder(orderId)
        return ({ success: responseFromDb.success, data: responseFromDb.data, error: responseFromDb.error })
    } catch (error) {
        return ({ success: false, error: "Something went wrong deleting order from db in service " + error })
    }
}