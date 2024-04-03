import { PrismaClient } from "@prisma/client"
import { Room } from "./types"
import { DietaryRestriction } from "../dietaryRestrictions/types"
import { FoodConsistency } from "../consistencyRestrictions/types"
import { Allergy } from "../allergyRestrictions/types"
import { Intolerance } from "../intoleranceRestrictions/types"
import { DietaryNeeds } from "../DietaryNeeds/types"

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

export const updateRoom = async (room: Room) => {
    try {
        // With inspiration of chatGPT of .map of functions.
        const dietaryRestrictionsToUpdate: DietaryRestriction[] = room.dietaryRestrictions
        const consistencyRestrictionsToUpdate: FoodConsistency[] = room.consistancyRestrictions
        const allergyRestrictionsToUpdate: Allergy[] = room.allergyRestrictions
        const intoleranceRestrictionsToUpdate: Intolerance[] = room.intoleranceRestrictions
        const dietaryNeedsToUpdate: DietaryNeeds[] = room.dietaryNeeds

        const updateRoomInDb = await prisma.room.update({
            where: { roomNumber: room.roomNumber },
            data: {
                dietaryRestrictions: {
                    deleteMany: [{ roomNumber: room.roomNumber }],
                    create: dietaryRestrictionsToUpdate.map(el => ({
                        dietaryRestrictionId: el.dietaryRestrictionId!,
                        dietaryRestriction: el.dietaryRestriction
                    }))
                },
                foodConsistencyRestrictions: {
                    deleteMany: [{ roomNumber: room.roomNumber }],
                    create: consistencyRestrictionsToUpdate.map(el => ({
                        foodConsistencyRestrictionId: el.consistency
                    }))
                },
                RoomToAllergyRestrictions: {
                    deleteMany: [{ roomNumber: room.roomNumber }],
                    create: allergyRestrictionsToUpdate.map(el => ({
                        allergyRestricionId: el.allergy
                    }))
                },
                RoomToIntolleranceRestrictions: {
                    deleteMany: [{ roomNumber: room.roomNumber }],
                    create: intoleranceRestrictionsToUpdate.map(el => ({
                        intolleranceRestrictionId: el.intolerance
                    }))
                },
                RoomToDietaryneeds: {
                    deleteMany: [{ roomNumber: room.roomNumber }],
                    create: dietaryNeedsToUpdate.map(el => ({
                        dietaryNeedId: el.dietaryNeed
                    }))
                },
            },
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
        console.log(updateRoomInDb)
        return { success: true, data: updateRoomInDb }
    } catch (error) {
        return { success: false, error: "Something went wrong updating room in db in repo " + error }
    }

}
