import * as roomsRepo from './Rooms.repository'
import { Room, Room as RoomType } from './types';

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

export const updateRoom = async (room: Room) => {
    try {
        const updateRoomInDb = await roomsRepo.updateRoom(room);
        return { success: updateRoomInDb.success, data: updateRoomInDb.data, error: updateRoomInDb.error }
    } catch (error) {
        return { success: false, error: "Something went wrong updating room in db in service " + error }
    }
}