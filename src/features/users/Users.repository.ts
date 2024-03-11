import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const fetchAllUsers = async () => {
    console.log("Inside fetchAllusers repo!")
    try {
        const usersFromDb = await prisma.user.findMany()
        return{success: true, data: usersFromDb}
    } catch (error) {
        return{success: false, error: "Failed to retrieve users from db"}
    }
}

export const fetchUser = async (email: string) => {
    try {
        const userFromDb = await prisma.user.findFirst(
            {where: {email: email}}
        )
        return {success: true, data: userFromDb}
    }
    catch (error) {
        return{success: false, error: "Failed to retrieve user from db"}
    }
}