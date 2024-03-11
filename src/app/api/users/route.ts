import { NextResponse } from "next/server"
import * as userController from "@/features/users/Users.controller"

export async function GET(){

    return await userController.fetchAllUsers()
}