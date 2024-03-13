"use client"
import { ChangeEvent, useState } from "react"
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
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({
            ...prev, password: event.target.value
        }))
    }

    return (
        <div className='mainbox'>
            <article className='itembox2'>
                <section className='contentitemboxrolle'>
                    <input type='text' placeholder='Brukernavn' className='inputbruker' value={user.name} onChange={handleNameChange} />
                </section>
                <section className='contentitemboxrolle'>
                    <input type='password' placeholder='Passord' className='inputbruker' value={user.password} onChange={handlePasswordChange} />
                </section>
            </article>

            <article className='centerbox'>
                <section className='contentitemboxrolle'><Rolledrop /></section>
            </article>

            <article className='centerbox'>
                <button className='generatebutton'>Opprett profil</button>
            </article>
        </div>
    )
}
export default CreateUser