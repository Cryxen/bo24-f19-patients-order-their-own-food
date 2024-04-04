import { NextRequest, NextResponse } from 'next/server';
import * as roomsService from './Rooms.service'
import { Room } from './types';

export const fetchAllRooms = async () => {
    try {
        const roomsFromDb = await roomsService.fetchAllRooms();
        return NextResponse.json({
            status: 200,
            data: roomsFromDb.data,
            success: roomsFromDb.success,
            error: roomsFromDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false, error: "Something went wrong fetching rooms from db " + error
        })
    }
}

export const updateRoom = async (req: NextRequest) => {
    try {
        const room = await req.json() as Room
        console.log(room)
        const updateRoomInDb = await roomsService.updateRoom(room)
        return NextResponse.json({
            status: 200,
            success: updateRoomInDb.success,
            data: updateRoomInDb.data,
            error: updateRoomInDb.error
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: "Something went wrong updating room in db in controller " + error
        })
    }
}