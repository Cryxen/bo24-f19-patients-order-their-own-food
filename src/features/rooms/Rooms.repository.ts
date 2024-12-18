// import { PrismaClient } from "@prisma/client"
import { Room } from "./types"
import { DietaryRestriction } from "../dietaryRestrictions/types"
import { FoodConsistency } from "../consistencyRestrictions/types"
import { Allergy } from "../allergyRestrictions/types"
import { Intolerance } from "../intoleranceRestrictions/types"
import { DietaryNeeds } from "../DietaryNeeds/types"
import { MVCDeletingError, MVCFetchingError, MVCUpdatingError } from "@/libs/errors/MVC-errors"
import prisma from "@/libs/utils/prisma"

// const prisma = prisma
export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await prisma.room.findMany({
            include: {
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
                },
                RoomToDietaryRestrictions: {
                    select: { dietaryRestrictionId: true }
                }
            }
        })
        return { success: true, data: roomsFromDb }
    } catch (error) {
        return { success: false, error: MVCFetchingError("rooms", "repository", error) }
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

        const deleteDietaryRestrictions = prisma.roomToDietaryRestrictions.deleteMany({
            where: {
                roomNumber: room.roomNumber
            }
        })

        const deleteConsistencyRestrictions = prisma.roomToFoodConsistencyRestrictions.deleteMany({
            where: {
                roomNumber: room.roomNumber,
            }
        })


        const deleteAllergyRestrictions = prisma.roomToAllergyRestrictions.deleteMany({
            where: {
                roomNumber: room.roomNumber
            }
        })

        const deleteIntoleranceRestrictions = prisma.roomToIntolleranceRestrictions.deleteMany({
            where: {
                roomNumber: room.roomNumber
            }
        })

        const deleteDietaryNeeds = prisma.roomToDietaryneeds.deleteMany({
            where: ({
                roomNumber: room.roomNumber
            })
        })

        const updateRoomInDb = prisma.room.upsert({
            where: { roomNumber: room.roomNumber },
            update: {
                RoomToDietaryRestrictions: {
                    create: dietaryRestrictionsToUpdate.map(el => ({
                        dietaryRestrictionId: el.dietaryRestrictionId!,
                    }))
                },
                foodConsistencyRestrictions: {
                    // deleteMany: [{ roomNumber: room.roomNumber }],
                    create: consistencyRestrictionsToUpdate.map(el => ({
                        foodConsistencyRestrictionId: el.consistency
                    }))
                },
                RoomToAllergyRestrictions: {
                    // deleteMany: [{ roomNumber: room.roomNumber }],
                    create: allergyRestrictionsToUpdate.map(el => ({
                        allergyRestricionId: el.allergy
                    }))
                },
                RoomToIntolleranceRestrictions: {
                    // deleteMany: [{ roomNumber: room.roomNumber }],
                    create: intoleranceRestrictionsToUpdate.map(el => ({
                        intolleranceRestrictionId: el.intolerance
                    }))
                },
                RoomToDietaryneeds: {
                    // deleteMany: [{ roomNumber: room.roomNumber }],
                    create: dietaryNeedsToUpdate.map(el => ({
                        dietaryNeedId: el.dietaryNeed
                    }))
                },
            },
            include: {
                RoomToDietaryRestrictions: {
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
            },
            create: {
                roomNumber: room.roomNumber
            }
        })

        const transaction = await prisma.$transaction([deleteDietaryRestrictions, deleteConsistencyRestrictions, deleteAllergyRestrictions, deleteIntoleranceRestrictions, deleteDietaryNeeds, updateRoomInDb])

        return { success: true, data: transaction }
    } catch (error) {
        return { success: false, error: MVCUpdatingError("room", "repository", error) }
    }

}

export const deleteRoomFromDb = async (roomNumber: number) => {
    try {

        const deleteDietaryRestrictions = prisma.roomToDietaryRestrictions.deleteMany({
            where: {
                roomNumber: roomNumber
            }
        })

        const deleteConsistencyRestrictions = prisma.roomToFoodConsistencyRestrictions.deleteMany({
            where: {
                roomNumber: roomNumber,
            }
        })


        const deleteAllergyRestrictions = prisma.roomToAllergyRestrictions.deleteMany({
            where: {
                roomNumber: roomNumber
            }
        })

        const deleteIntoleranceRestrictions = prisma.roomToIntolleranceRestrictions.deleteMany({
            where: {
                roomNumber: roomNumber
            }
        })

        const deleteDietaryNeeds = prisma.roomToDietaryneeds.deleteMany({
            where: ({
                roomNumber: roomNumber
            })
        })


        const deleteRoom = prisma.room.delete({
            where: { roomNumber: roomNumber }
        })

        const transaction = await prisma.$transaction([deleteDietaryRestrictions, deleteConsistencyRestrictions, deleteAllergyRestrictions, deleteIntoleranceRestrictions, deleteDietaryNeeds, deleteRoom])

        return { success: true, data: transaction }
    } catch (error) {
        return { success: false, error: MVCDeletingError("room", "repository", error) }
    }
}