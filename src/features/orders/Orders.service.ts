import * as ordersRepository from './Orders.repository'

export const fetchAllOrders = async () => {
    try {
        const fetchOrdersFromDb = await ordersRepository.fetchAllOrders()
        return ({success: true, data: fetchOrdersFromDb.data, error: fetchOrdersFromDb.error}) 
    } catch (error) {
        return ({success: false, error: "Failed to fetch orders from db in service " + error})
    }

}