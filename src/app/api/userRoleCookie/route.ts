import { userRoleDeleteFromCookie } from "@/libs/cookies/userRolesServer";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = (req: NextRequest) => {
    if (userRoleDeleteFromCookie())
        return NextResponse.json({
            status: 200
        })

    else
        return NextResponse.json({
            status: 409
        })

}