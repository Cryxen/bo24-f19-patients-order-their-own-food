"use client"
import './styles/notfound.scss'
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"


const PageNotFound = () => {
    const router = useRouter()

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        router.push('/')
    }
    return (
        <div className="mainDiv">
            <div className="main-wrapper">
                <h1 className="not-found-h1">404</h1>
                <h2 className="not-found-h2">Siden ble ikke funnet!</h2>
                <p>Ooooops... siden du leter etter finnes ikke! </p>
                <button className="return-button" onClick={handleButtonClick}>Returner til login siden</button>
            </div>
        </div>

    )
}
export default PageNotFound