import { PrismaClient } from "@prisma/client"

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