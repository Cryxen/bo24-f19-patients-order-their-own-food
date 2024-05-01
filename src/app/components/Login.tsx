"use client"
import '../styles/globals.scss'
import '../styles/loginpage.scss'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { User } from '@/features/users/types'
import { useRouter } from 'next/navigation'
import { userRoleSaveToCookie } from '@/libs/cookies/userRolesServer'
import { checkUserRole } from '@/libs/router/checkUserRole'

const Login = () => {
    //TODO: ERROR HANDLING.
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showDbError, setShowDbError] = useState<boolean>(false)
    const [showWrongCredentials, setShowWrongCredentials] = useState<boolean>(false)

    //https://nextjs.org/docs/pages/building-your-application/routing/redirecting
    const router = useRouter()


    //https://stackoverflow.com/a/42645711
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmitButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let user: User
        const response = await fetch(`/api/users?email=${email}&password=${password}`)
        console.log(response)
        if (response.status == 200) {
            const data = await response.json()
            console.log(data)
            if (data.success === true) {
                setShowDbError(false)
                setShowWrongCredentials(false)
                user = data.data
                userRoleSaveToCookie(user.role)
                //Route according to role
                switch (user.role) {
                    case "healthcare":
                        router.push('/healthcareworker')
                        break;
                    case "kitchen":
                        router.push('/kitchenstaff')
                        break;
                    case "administrator":
                        router.push('/administrator')
                        break;
                    case "development":
                        router.push('/developer')
                        break;
                    default:
                        break;
                }
            }
            else if (data.success === false) {
                setShowDbError(false)
                setShowWrongCredentials(true)
                console.error("feil passord")
            }
            else {
                console.error("Mangler data.success")
                setShowDbError(true)
                setShowWrongCredentials(false)
            }
        }
    }

    return (
        <div className='mainDiv'>


            <img src={'/media/logo-stor.webp'} alt='Stor Sunnaas logo' className='logoLogin'></img>

            <h2 className='titleLogin'>Matbestillingsplattform</h2>
            {showDbError ?
                <p>Noe gikk galt med å koble til databasen. Av og til tar det litt tid når noe i infrastrukturen
                    har fått en omstart, prøv igjen senere.</p> : ""}

            {showWrongCredentials ?
                <p>Kunne ikke finne brukernavn eller passord. Prøv på nytt</p> : ""}
            <form className="login-container">
                <input type="email" value={email} onChange={handleEmailChange} placeholder='E-post' />
                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Passord' />
                <button type="submit" className="submit-button" onClick={handleSubmitButton}>Login</button>
            </form>
        </div>

    )
}

export default Login