import { NextResponse } from 'next/server';
import * as roomsService from './Rooms.service'

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