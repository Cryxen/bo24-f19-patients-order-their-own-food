import { NextRequest, NextResponse } from "next/server";
import { checkUserRole } from "./libs/router/checkUserRole";
import { NextApiResponse } from "next";

export const middleware = (req: NextRequest, res: NextResponse) => {
    if (!checkUserRole(req)) {
        return NextResponse.redirect(new URL('/', req.url))

    }
}

export const config = {
    matcher: [
        '/administrator/:path*', '/healthcareworker/:path*', '/kitchenstaff/:path*'
    ]
}