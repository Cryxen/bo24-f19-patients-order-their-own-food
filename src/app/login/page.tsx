"use client"
import '../styles/loginpage.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { User } from '@/features/users/types'
import { useRouter } from 'next/navigation'
export default function Login() {

    //TODO: ERROR HANDLING.

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        if (response.status == 200) {
            const data = await response.json()
            if (data.success === true) {
                user = data.data
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
                    default:
                        break;
                }
            }
        }
    }

    return (
        <Layout>
            <div className='mainDiv'>
                <h1>Logo</h1>
                <form>
                    <input type="email" value={email} onChange={handleEmailChange} placeholder='E-post'/>
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder='Passord'/>
                    <button type="submit" onClick={handleSubmitButton}>Login</button>
                </form>
            </div>
        </Layout>
    )
}