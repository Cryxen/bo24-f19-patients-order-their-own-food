import { NextRequest, NextResponse } from "next/server"
import * as userService from './Users.service'
import { NextApiRequest } from "next"
import { User } from "./types"
import { MVCFetchingError, MVCSavingError } from "@/libs/errors/MVC-errors"
import { error } from "console"

export const fetchUsers = async (req: NextRequest) => {
    if (req.nextUrl.searchParams.get('email')) {
        const email = req.nextUrl.searchParams.get('email')
        const password = req.nextUrl.searchParams.get('password')
        if (typeof email === 'string' && typeof password === 'string') {
            try {
                const userFromDb = await userService.fetchUser(email, password)
                return NextResponse.json({
                    status: 200,
                    success: userFromDb?.success,
                    data: userFromDb?.data,
                    error: userFromDb?.error
                }
                )
            }
            catch (error) {
                return NextResponse.json({ success: false, error: MVCFetchingError("user", "controller", error) })
            }
        }
    }
    else {
        try {
            const usersFromDb = await userService.fetchAllUsers()
            console.log(usersFromDb)
            return NextResponse.json({
                status: 200,
                success: usersFromDb?.success,
                data: usersFromDb?.data,
                error: usersFromDb?.error
            })
        } catch (error) {
            return NextResponse.json({ success: false, error: MVCFetchingError("users", "controller", error) })
        }
    }
}


export const saveUser = async (req: NextRequest) => {
    try {
        const userToSave = await req.json() as User
        const responseFromDb = await userService.saveUser(userToSave)
        console.log(userToSave)
        return NextResponse.json({
            status: 200,
            success: responseFromDb.success,
            data: responseFromDb?.data,
            error: responseFromDb?.error
        })
    } catch (error) {
        return NextResponse.json({ success: false, error: MVCSavingError("user", "controller", error) })
    }
}