import { MVCDeletingError, MVCFetchingError, MVCSavingError } from "@/libs/errors/MVC-errors"
import { Order, PrismaClient } from "@prisma/client"

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
        return ({ success: false, error: MVCFetchingError("orders", "repository", error) })
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
        return ({ success: false, error: MVCSavingError("order", "repository", error)})
    }
}

export const deleteOrder = async (orderId: number) => {
    try {
        const responseFromDb = await prisma.order.delete({
            where: { id: orderId }
        })
        return { success: true, data: responseFromDb }
    } catch (error) {
        return { success: false, error: MVCDeletingError("order", "repository", error) }
    }
}