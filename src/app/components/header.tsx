import { findRoleFromCookies } from "@/libs/cookies/userRolesClient"
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"
import Image from 'next/image'

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
            <Image src={'/media/logo.webp'} alt="Sunnaas logo" width="300" height="42"></Image>
            <div className="header-buttons">
            <button className="header-content" onClick={handleRouteToDashboardButton}>Dashboard</button>
            <button className="header-content" onClick={handleLogOutButton}>Logg ut</button>
            </div>
        </header>
    )
}
export default Header