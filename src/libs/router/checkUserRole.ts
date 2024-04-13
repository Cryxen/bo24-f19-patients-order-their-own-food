import { redirect, usePathname } from "next/navigation"
import { userRoleCheckCookie } from "../cookies/userRoles"
import { useEffect } from "react"
import { NextRequest, NextResponse } from "next/server"

/**
 * Compares user role towards link and routes the web application towards which page that the user have access to.
 */
export const checkUserRole = (pathName: string, req: NextRequest) => {
    const role = userRoleCheckCookie()
    // const pathName = usePathname()
    console.log(role)
    console.log(req.headers.get('host'))
    const homeURL = new URL(req.nextUrl.href)
    console.log(homeURL)
    const checkPathName = (pathnameToCheck: string): boolean | NextResponse => {
        if (pathName.toLowerCase().includes(pathnameToCheck.toLowerCase())) {
            return true
        }
        else {
            return redirectToLogin()
        }
    }

    const redirectToLogin = () => {
        req.nextUrl.pathname = '/'
        return NextResponse.redirect(req.nextUrl)
    }

    switch (role) {
        case "administrator":
            checkPathName("administrator")
            break;
        case "healthcare":
            checkPathName("healthcareworker")
            break;
        case "kitchen":
            checkPathName("kitchenstaff")
            break;
        default:
            console.log("no case")
            break;
    }
    return redirectToLogin()



}

// }