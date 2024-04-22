import { findRoleFromCookies } from "@/libs/cookies/userRolesClient"
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"

const Header = () => {
    const router = useRouter()

    const handleRouteToDashboardButton = () => {
        const role = findRoleFromCookies()
        switch (role) {
            case 'administrator':
                router.push('/administrator')
                break;
            case 'development':
                router.push('/developer')
                break;
            case "healthcare":
                router.push('/healthcareworker')
                break;
            case "kitchen":
                router.push('/kitchenstaff')
                break;
            default:
                break;
        }
    }

    const handleLogOutButton = async (event: MouseEvent<HTMLButtonElement>) => {
        const response = await fetch('/api/userRoleCookie', {
            method: 'DELETE'
        })
        if(response.status === 200) {
            router.push('/')
        }
        else {
            console.error("Something went wrong logging out " + response)
        }
    }

    return (
        <header>
            <button className="header-content" onClick={handleRouteToDashboardButton}>Dashboard</button>
            <button className="header-content" onClick={handleLogOutButton}>Logg ut</button>
        </header>
    )
}
export default Header