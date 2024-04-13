import { NextRequest } from "next/server";
import { checkUserRole } from "./libs/router/checkUserRole";

export const middleware = (req: NextRequest) => {
    console.log("Inside middleware")
    return checkUserRole(req)
}

export const config = {
    matcher: [
        '/administrator/:path*', '/healthcareworker/:path*', '/kitchenstaff/:path*'
    ]
}