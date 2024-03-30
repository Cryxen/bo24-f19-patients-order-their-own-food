import * as roomsRepo from './rooms.repository'

export const fetchAllRooms = async () => { 
    try {
        const roomsFromDb = await roomsRepo.fetchAllRooms();
        return {success: true, data: roomsFromDb.data}
    } catch (error) {
        return {success: false, data: "Failed to fetch rooms from db in service " + error}
    }
}