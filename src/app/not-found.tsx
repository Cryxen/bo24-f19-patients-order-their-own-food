"use client"
import { useRouter } from "next/navigation"
import { MouseEvent } from "react"


const PageNotFound = () => {
    const router = useRouter()

    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        router.push('/')
    }
    return (
        <>
            <h1>Oooops... Denne siden finnes ikke.</h1>
            <button onClick={handleButtonClick}>Trykk her for å komme til logg inn siden</button>
        </>

    )
}
export default PageNotFound