import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await prisma.room.findMany()
        return {success: true, data: roomsFromDb}
    } catch (error) {
        return {success: false, error: "Failed to retrieve users from db " + error}
    }
}