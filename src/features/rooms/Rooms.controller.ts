import { NextRequest, NextResponse } from 'next/server';
import * as roomsService from './Rooms.service'
import { Room } from './types';
import { MVCDeletingError, MVCFetchingError, MVCUpdatingError } from '@/libs/errors/MVC-errors';

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
            success: false, error: MVCFetchingError("rooms", "controller", error)
        })
    }
}

export const updateRoom = async (req: NextRequest) => {
    try {
        const room = await req.json() as Room
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
            error: MVCUpdatingError("rooms", "controller", error)
        })
    }
}

export const deleteRoomFromDb = async (req: NextRequest) => {
    try {
        if (req.nextUrl.searchParams.get('roomNumber')) {
            const roomNumber = req.nextUrl.searchParams.get('roomNumber') as string
            const deleteRoom = await roomsService.deleteRoomFromDb(parseInt(roomNumber))
            return NextResponse.json({
                status: 200,
                success: deleteRoom.success,
                data: deleteRoom.data,
                error: deleteRoom.error
            })

        }
        else
            return NextResponse.json({
                success: false, status: 400, error: "Missing parameter"
            })
    } catch (error) {
        return NextResponse.json({
            success: false, error: MVCDeletingError("rooms", "controller", error)
        })
    }
}