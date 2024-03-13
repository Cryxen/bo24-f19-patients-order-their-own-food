"use client"
import { ChangeEvent, MouseEvent, useState } from "react"
import Rolledrop from "./Rolledrop"
import { User } from "@/features/users/types"

const CreateUser = () => {
    const [user, setUser] = useState<User>(
        {
            name: '',
            email: '',
            password: '',
            role: 'undefined'
        }
    )

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev, name: event.target.value
        }))
    }
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev, email: event.target.value
        }))
    }
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev, password: event.target.value
        }))
    }

    const changeRole = (event: ChangeEvent<HTMLSelectElement>, user: User) => {
        setUser(prev => ({
            ...prev, role: event.target.value as User["role"]
        }))
    }

    const submitUser = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (user.name !== '' || user.email !== '' || user.password !== '' || user.role !== 'undefined') //If check to see that fields are filled
        {
            const response = await fetch('/api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (response.status === 200)
            {
                const data = await response.json()
                console.log(data)
            }
            else
                console.error("Something went wrong creating user API call")
        }
        console.log(user)
    }


    return (
        <div className='mainbox'>
            <article className='itembox2'>
                <section className='contentitemboxrolle'>
                    <input type='text' placeholder='Navn' className='inputbruker' value={user.name} onChange={handleNameChange} />
                </section>
                <section className='contentitemboxrolle'>
                    <input type='email' placeholder='E-post' className='inputbruker' value={user.email} onChange={handleEmailChange} />
                </section>
                <section className='contentitemboxrolle'>
                    <input type='password' placeholder='Passord' className='inputbruker' value={user.password} onChange={handlePasswordChange} />
                </section>
            </article>

            <article className='centerbox'>
                <section className='contentitemboxrolle'><Rolledrop user={user} changeRole={changeRole} /></section>
            </article>

            <article className='centerbox'>
                <button className='generatebutton' onClick={submitUser}>Opprett profil</button>
            </article>
        </div>
    )
}
export default CreateUser