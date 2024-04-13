import { redirect, usePathname } from "next/navigation"
import { userRoleCheckCookie } from "../cookies/userRoles"
import { useEffect } from "react"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

/**
 * Compares user role towards link and routes the web application towards which page that the user have access to.
 */
export const checkUserRole = (req: NextRequest) => {
    const role = userRoleCheckCookie()
    const pathName = req.url
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

    if (role === 'administrator') {
        if (checkPathName("administrator"))
            redirectToLogin()
    }
    else if (role === "healthcare") {
        if (checkPathName("healthcareworker"))
            redirectToLogin()
    } else if (role === 'kitchen') {
        if (checkPathName("kitchenstaff"))
            redirectToLogin()
    }
    else {
        return
    }

    // switch (role) {
    //     case "administrator":
    //         checkPathName("administrator")
    //         break;
    //     case "healthcare":
    //         checkPathName("healthcareworker")
    //         break;
    //     case "kitchen":
    //         checkPathName("kitchenstaff")
    //         break;
    //     default:
    //         console.log("no case")
    //         break;
    // }
    // return redirectToLogin()



}

// }