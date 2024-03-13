import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const fetchAllMeals = async () => {
    try {
        const mealsFromDb = await prisma.meal.findMany()
        return { success: true, data: mealsFromDb }
    }
    catch (error) {
        return { success: false, error: "Failed to retrieve meals from db" }
    }
}