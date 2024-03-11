"use client"
import '../styles/loginpage.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { User } from '@/features/users/types'
export default function Login() {
    const [email, setEmail] = useState('E-post')
    const [password, setPassword] = useState('Passord')

    //https://stackoverflow.com/a/42645711
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmitButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let user: User
        fetch(`/api/users?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <Layout>
            <div className='mainDiv'>
                <h1>Logo</h1>
                <form>
                    <input type="text" value={email} onChange={handleEmailChange} />
                    <input type="text" value={password} onChange={handlePasswordChange} />
                    <button type="submit" onClick={handleSubmitButton}>Login</button>
                </form>
            </div>
        </Layout>
    )
}