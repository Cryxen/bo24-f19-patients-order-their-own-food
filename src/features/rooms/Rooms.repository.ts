import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await prisma.room.findMany({
            include: {
                dietaryRestrictions: {
                    select: { dietaryRestrictionId: true }
                },
                foodConsistencyRestrictions: {
                    select: { foodConsistencyRestrictionId: true }
                },
                RoomToAllergyRestrictions: {
                    select: { allergyRestricionId: true }
                },
                RoomToIntolleranceRestrictions: {
                    select: { intolleranceRestrictionId: true }
                },
                RoomToDietaryneeds: {
                    select: { dietaryNeedId: true }
                }
            }
        })
        return { success: true, data: roomsFromDb }
    } catch (error) {
        return { success: false, error: "Failed to retrieve users from db in repository " + error }
    }
}