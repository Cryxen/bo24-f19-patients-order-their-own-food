"use client"
import Layout from '@/app/components/layout'
import Rolledrop from '../../components/Rolledrop';
import '../../styles/useradministration.scss'
import '../../styles/globals.scss'
import { SetStateAction, useEffect, useState } from 'react';
import { User } from '@/features/users/types';



const useradministration = () => {

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
            if(response.status === 200)
                {
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
                <div className='mainbox'>

                    {users.map((user: User) =>
                        <article className='itembox' key={user.email}>
                            <section className='contentitembox'><p>{user.name}</p></section>
                            <section className='contentitemboxrolle'><Rolledrop user={user} changeRole={changeRole} /></section>
                        </article>
                    )}


                </div>


            </div>
        </Layout>
    )
}
export default useradministration