import { PrismaClient } from "@prisma/client"
import { User } from "./types"
import { MVCFetchingError, MVCSavingError } from "@/libs/errors/MVC-errors"

const prisma = new PrismaClient()

export const fetchAllUsers = async () => {
    console.log("Inside fetchAllusers repo!")
    try {
        const usersFromDb = await prisma.user.findMany()
        return { success: true, data: usersFromDb }
    } catch (error) {
        return { success: false, error: MVCFetchingError("users", "repository", error) }
    }
}

export const fetchUser = async (email: string) => {
    try {
        const userFromDb = await prisma.user.findFirst(
            { where: { email: email } }
        )
        return { success: true, data: userFromDb }
    }
    catch (error) {
        return { success: false, error: MVCFetchingError("user", "repository", error) }
    }
}

export const saveUser = async (user: User) => {
    try {
        const responseFromDb = await prisma.user.upsert({
            where: { email: user.email },
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
        return { success: true, data: responseFromDb }
    } catch (error) {
        return { success: false, error: MVCSavingError("user", "repository", error) }

    }
}