import * as roomsController from '@/features/rooms/Rooms.controller'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
    return roomsController.fetchAllRooms()
}

export const POST = async (req: NextRequest) => {
    return roomsController.updateRoom(req)
}

export const DELETE = async (req: NextRequest) => {
    return roomsController.deleteRoomFromDb(req)
}