import { PrismaClient } from "@prisma/client"
import { User } from "./types"

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

export const saveUser = async (user: User) => {
    try {
        const responseFromDb = await prisma.user.upsert({
            where: {email: user.email},
            update: {
                name: user.name,
                password: user.password,
                role: user.role
            },
            create: {
                email: user.email,
                name: user.name,
                password: user.password,
                role: user.role
            }
        })
        return {success: true, data: responseFromDb}
    } catch (error) {
        return{success: false, error: "Failed to update or save entry to user table in db"}
        
    }
}