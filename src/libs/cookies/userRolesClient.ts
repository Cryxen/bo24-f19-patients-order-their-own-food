"use client"

import { User, userRoleTypeGuard } from "@/features/users/types"

export const findRoleFromCookies = (): User["role"] => {
    const cookie = document.cookie.split("=")
    const index = (cookie.findIndex(el => el === "role"))

    if (userRoleTypeGuard(cookie[index + 1])) {
        return cookie[index + 1] as User["role"]
    }
    return 'undefined' as User["role"]
}