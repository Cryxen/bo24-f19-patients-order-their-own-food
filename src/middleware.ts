import { NextRequest, NextResponse } from "next/server";
import { checkUserRole } from "./libs/router/checkUserRole";
import { NextApiResponse } from "next";

export const middleware = (req: NextRequest, res: NextResponse) => {
    console.log("Inside middleware")
    if (!checkUserRole(req)) {
        return NextResponse.redirect(new URL('/', req.url))

    }


    // return checkUserRole(req, res)
}

export const config = {
    matcher: [
        '/administrator/:path*', '/healthcareworker/:path*', '/kitchenstaff/:path*'
    ]
}