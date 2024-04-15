import { findRoleFromCookies } from "@/libs/cookies/userRolesClient"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()

    const routeToDashboard = () => {
        const role = findRoleFromCookies()
        switch (role) {
            case 'administrator':
                router.push('/administrator')
                break;
            case 'development':
                router.push('/')
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

    return (
        <header>
            <button className="header-content" onClick={routeToDashboard}>Dashboard</button>
            <button className="header-content">Bruker</button>
        </header>
    )
}
export default Header