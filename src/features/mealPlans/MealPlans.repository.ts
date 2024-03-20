import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const fetchAllMealPlans = async () => {
    try {
        const mealPlansFromDb = await prisma.mealPlan.findMany({
            select: {
                meals: true
            }
        })
        return {success: true, data: mealPlansFromDb}
    } catch (error) {
        return {success: false, error: "Failed to retrieve meal plans from db"}
    }
}