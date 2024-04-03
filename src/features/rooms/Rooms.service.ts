import * as roomsRepo from './Rooms.repository'
import { Room as RoomType } from './types';

const changeKeyNames = (rooms: any[]): RoomType[] => {
    let roomWithProperKeys: RoomType[] = []
    rooms.forEach(element => {
        roomWithProperKeys.push({
            roomNumber: element.roomNumber,
            dietaryRestrictions: element.dietaryRestrictions,
            consistancyRestrictions: element.foodConsistencyRestrictions,
            intoleranceRestrictions: element.RoomToIntolleranceRestrictions,
            allergyRestrictions: element.RoomToAllergyRestrictions,
            dietaryNeeds: element.RoomToDietaryneeds
        });
    })
    console.log(rooms)
    console.log()
    console.log()
    console.log(roomWithProperKeys)
    return roomWithProperKeys
}

export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await roomsRepo.fetchAllRooms();
        return { success: true, data: changeKeyNames(roomsFromDb?.data!), error: roomsFromDb.error }
    } catch (error) {
        return { success: false, data: "Failed to fetch rooms from db in service " + error }
    }
}