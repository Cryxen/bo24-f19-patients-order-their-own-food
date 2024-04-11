import { PrismaClient } from "@prisma/client"
import { Order } from "./types"

const prisma = new PrismaClient

export const fetchAllOrders = async () => {

    try {
        const fetchOrdersFromDb = await prisma.order.findMany({
            include: {
                mealPlan: {
                    include: {
                        meals: {
                            select: {
                                meal: true
                            }
                        }
                    }
                }
                
            }
        })
        return ({ success: true, data: fetchOrdersFromDb })
    } catch (error) {
        return ({ success: false, error: "Failed to fetch orders from db in repository " + error })
    }
}

export const saveOrUpdateOrder = async (order: Order) => {
    try {
        const responseFromDb = await prisma.order.upsert({
            where: { id: order.id },
            update: {
                size: order.size,
                roomNumber: order.roomNumber,
                mealPlanId: order.mealPlanId
            },
            create: {
                size: order.size,
                roomNumber: order.roomNumber,
                mealPlanId: order.mealPlanId
            }
        })
        return ({ success: true, data: responseFromDb })
    } catch (error) {
        return ({ success: false, error: "Something went wrong saving or updating order in db " + error })
    }
}

export const deleteOrder = async (orderId: number) => {
    try {
        const responseFromDb = await prisma.order.delete({
            where: {id: orderId}
        })
        return {success: true, data: responseFromDb}
    } catch (error) {
        return {success: false, error: "Something went wrong deleting order from db in repository " + error}
    }
}