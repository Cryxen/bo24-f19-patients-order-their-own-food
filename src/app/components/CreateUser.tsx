"use client"
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react"
import Rolledrop from "./Rolledrop"
import { User } from "@/features/users/types"

const CreateUser = (props: { setUsers: Dispatch<SetStateAction<User[]>> }) => {
    const [user, setUser] = useState<User>(
        {
            name: '',
            email: '',
            password: '',
            role: 'undefined'
        }
    )
    const [filledInput, setFilledInput] = useState<Boolean>(true)

    const { setUsers } = props


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
        if (user.name.length > 0 && user.email.length > 0 && user.password.length > 0 && user.role !== 'undefined') //If check to see that fields are filled
        {
            setFilledInput(true)
            const response = await fetch('/api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)

                setUsers(prev => [...prev, user])
            }
            else
                console.error("Something went wrong creating user API call")
        }
        else
            setFilledInput(false)
        console.log(user)
    }


    return (
        <div className="profile-wrapper">
            <article className="profile-container">
                <section className="name-box">
                    <input type="text" placeholder="Navn" className="input-name" value={user.name} onChange={handleNameChange} />
                </section>
                <section className="email-box">
                    <input type="email" placeholder="E-post" className="input-email" value={user.email} onChange={handleEmailChange} />
                </section>
                <section className="password-box">
                    <input type="password" placeholder="Passord" className="input-password" value={user.password} onChange={handlePasswordChange} />
                </section>
            </article>

            <article className="role-container">
                <section className="role-box"><Rolledrop user={user} changeRole={changeRole} /></section>
            </article>

            <article className="submit-container">
                {filledInput ? '' : <p>Alle felter må fylles.</p>}
                <button className="submit-button" onClick={submitUser}>Opprett profil</button>
            </article>
        </div>
    )
}
export default CreateUser