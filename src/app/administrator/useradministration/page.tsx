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

    const changeRole = (event: React.ChangeEvent<HTMLSelectElement>, user: User) => {
        console.log("inside changerole")
        console.log(users)
        console.log(user)
        setUsers(users?.map(el => (
            el.email === user.email ? { ...el, role: event.target.value as User["role"] } : el
        )))
        console.log(users)
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

                <div className='mainbox'>
                    <article className='itembox2'>
                        <section className='contentitemboxrolle'><input type='text' placeholder='Brukernavn' className='inputbruker'></input></section>
                        <section className='contentitemboxrolle'><input type='text' placeholder='Passord' className='inputbruker'></input></section>
                    </article>

                    <article className='centerbox'>
                        <section className='contentitemboxrolle'><Rolledrop /></section>
                    </article>

                    <article className='centerbox'>
                        <button className='generatebutton'>Opprett profil</button>
                    </article>
                </div>

            </div>
        </Layout>
    )
}
export default useradministration