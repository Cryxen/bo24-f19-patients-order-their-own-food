import { NextResponse } from "next/server"
import * as userService from './Users.service' 

export const fetchAllUsers = async () => {
    try {
        const usersFromDb = await userService.fetchAllUsers()
        return NextResponse.json({
            status: 200,
            success: true,
            data: usersFromDb.data
        })
    } catch (error) {
        return NextResponse.json({success:false, error: usersFromDb.error})
    }
}