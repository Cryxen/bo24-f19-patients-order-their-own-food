import * as roomsRepo from './Rooms.repository'

export const fetchAllRooms = async () => { 
    try {
        const roomsFromDb = await roomsRepo.fetchAllRooms();
        return {success: true, data: roomsFromDb.data, error: roomsFromDb.error}
    } catch (error) {
        return {success: false, data: "Failed to fetch rooms from db in service " + error}
    }
}