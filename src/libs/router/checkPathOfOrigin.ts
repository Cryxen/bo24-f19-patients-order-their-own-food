import { NextRequest } from "next/server";

/**
 * Checks if pathOfOrigin is the same as linkToCheck
 * @param req NextRequest
 * @param linkToCheck String link to check
 * @returns boolean
 */
export const checkPathOfOrigin = (req: NextRequest, linkToCheck: string): boolean => {
    const url = req.headers.get('next-url')
    if (url === linkToCheck)
        return true
    else
        return false
}