import { NextRequest, NextResponse } from "next/server"
import * as userController from "@/features/users/Users.controller"
import { NextApiRequest } from "next"

export async function GET(req: NextRequest){
    return await userController.fetchUsers(req)
}