import { checkUserRole } from "@/libs/router/checkUserRole"
import { useEffect } from "react"

const Header = () => {



    return(
        <header>
            <button className="header-content">Dashboard</button>
            <button className="header-content">Bruker</button>
        </header>
    )
}
export default Header