import { NextRequest, NextResponse } from "next/server"
import * as userService from './Users.service'
import { NextApiRequest } from "next"

export const fetchUsers = async (req: NextRequest) => {
    let userFromDb
    let usersFromDb
    if (req.nextUrl.searchParams.get('email')) {
        const email = req.nextUrl.searchParams.get('email')
        const password = req.nextUrl.searchParams.get('password')
        try {
            const userFromDb = await userService.fetchUser(email, password)
            return NextResponse.json({
                status: 200,
                success: userFromDb.success,
                data: userFromDb?.data,
                error: userFromDb?.error
            })
        }
        catch(error) {
            return NextResponse.json({success: false, error: "something went terribly wrong in controller fetching one user"}) //TODO: fix error handling
        }
    }
    else {
        try {
            const usersFromDb = await userService.fetchAllUsers()
            return NextResponse.json({
                status: 200,
                success: true,
                data: usersFromDb.data
            })
        } catch (error) {
            return NextResponse.json({ success: false, error: "something went terribly wrong in controller fetching all users"}) //TODO: fix error handling
        }
    }
}