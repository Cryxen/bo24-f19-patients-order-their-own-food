import * as roomsRepo from './Rooms.repository'
import { Room, Room as RoomType } from './types';

const changeKeyNames = (rooms: any[]): RoomType[] => {
    console.log(rooms)
    let roomWithProperKeys: RoomType[] = []
    rooms.forEach(element => {
        roomWithProperKeys.push({
            roomNumber: element.roomNumber,
            dietaryRestrictions: element.RoomToDietaryRestrictions,
            consistancyRestrictions: element.foodConsistencyRestrictions,
            intoleranceRestrictions: element.RoomToIntolleranceRestrictions,
            allergyRestrictions: element.RoomToAllergyRestrictions,
            dietaryNeeds: element.RoomToDietaryneeds
        });
    })

    return roomWithProperKeys
}

export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await roomsRepo.fetchAllRooms();
        console.log(roomsFromDb)
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