import { Order, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export const fetchAllOrders = async () => {

    try {
        const fetchOrdersFromDb = await prisma.order.findMany({
            include: {
                mealPlan: true
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