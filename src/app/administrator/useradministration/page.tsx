"use client"
import Layout from '@/app/components/layout'
import Rolledrop from '../../components/Rolledrop';
import '../../styles/useradministration.scss'
import '../../styles/globals.scss'
import { SetStateAction, useEffect, useState } from 'react';
import { User } from '@/features/users/types';
import CreateUser from '@/app/components/CreateUser';



const Useradministration = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('/api/users')
        if (response.status == 200) {
            const data = await response.json()
            setUsers(data.data)
        }
        else
            console.error("Something went wrong retrieving users from API")
    }

    const changeRole = async (event: React.ChangeEvent<HTMLSelectElement>, user: User) => {
        const userToUpdate: User = { ...user, role: event.target.value as User["role"] }

        setUsers(users?.map(el => (
            el.email === user.email ? userToUpdate : el
        )))

        const response = await fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToUpdate)
        })
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
        }
        else
            console.error("Something went wrong updating roles on user object in database")
        console.log(users)
        console.log(response)

    }


    return (
        <Layout>
        <div className="mainDiv">
            <h1>Brukeradministrasjon</h1>
            <div className="main-wrapper">
                {users
                    .filter(user => user.role !== "development") // Fjerner developmentbruker fra listen
                    .map((user: User) =>
                        <div className="useradmin-container" key={user.email}>
                            <section className="user-box"><p>Navn: {user.name}</p></section>
                            <section className="user-box"><p>Epost: {user.email}</p></section>
                            <section className="role-box"><Rolledrop user={user} changeRole={changeRole} /></section>
                        </div>
                    )}
                <CreateUser setUsers={setUsers}/>
            </div>
        </div>
    </Layout>
    )
}
export default Useradministration