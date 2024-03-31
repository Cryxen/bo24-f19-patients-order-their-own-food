import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const fetchAllIntolerance = async () => {
    try {
        const intoleranceFromDb = await prisma.intolerance.findMany()
        return {
            success: true, data: intoleranceFromDb
        }
    } catch (error) {
        return {
            success: false, error: "Failed to retrieve intolerance from db in repository " + error
        }
    }
}