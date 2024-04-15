import { userRoleCheckCookie } from "../cookies/userRoles"
import { NextRequest, NextResponse } from "next/server"

/**
 * Compares user role towards link and routes the web application towards which page that the user have access to.
 */
export const checkUserRole = (req: NextRequest) => {
    const role = userRoleCheckCookie()
    const pathName = req.url

    /**
     * Checks the path name towards given string to check. If the pathname contains string, returns true.
     * @param pathnameToCheck URL Pathname
     * @returns boolean
     */
    const checkPathName = (pathnameToCheck: string): boolean | NextResponse => {
        if (pathName.toLowerCase().includes(pathnameToCheck.toLowerCase())) {
            return true
        }
        else {
            return false
        }
    }

    /**
     * Checks path name depending on role.
     */
    if (role === 'administrator') {
        if (checkPathName("administrator"))
            return true
        else
            return false
    }
    else if (role === "healthcare") {
        if (checkPathName("healthcareworker"))
            return true
        else
            return false
    } else if (role === 'kitchen') {
        if (checkPathName("kitchenstaff"))
            return true
        else
            return false
    }
    else if (role === 'development')
        return true
    else {
        return false
    }
}
