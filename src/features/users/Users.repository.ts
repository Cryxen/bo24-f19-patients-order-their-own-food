import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const fetchAllUsers = async () => {
    console.log("Inside fetch user repo!")
    try {
        const usersFromDb = await prisma.user.findMany()
        return{success: true, data: usersFromDb}
    } catch (error) {
        return{success: false, error: "Failed to retrieve users from db"}
    }
}