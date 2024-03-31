"use client"
import Layout from "@/app/components/layout"
import Diettbox from "@/app/components/Diettbox"
import '../../styles/pasientadministrasjon.scss'
import '../../styles/globals.scss'
import { useEffect, useState } from "react"
import { Room } from "@/features/rooms/types"

/*VIRKER KUN PÅ DEKSTOP PER NÅ*/

const pasientadministrasjon = () => {
    const [roomsFromDb, setRoomsFromDb] = useState<Room[]>([])

    useEffect(() => {
        fetchAllRooms()
    }, [])

    const fetchAllRooms = async () => {
        const response = await fetch('/api/rooms')
        if (response.status === 200) {
            const data = await response.json()
            setRoomsFromDb(data.data)
        }
    }

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Pasientadministrasjon</h1>
                <div className="main-wrapper">
                    <div className="room-container">
                        <h2 className="title">Velg rom</h2>
                        <select name="room" id="room" className="room dropdown">
                            {roomsFromDb?.map(room => {
                                return <option key={room.roomNumber} value={room.roomNumber}>{room.roomNumber}</option>
                            })}
                        </select>
                    </div>
                    <h2 className="title">Velg diettrestirksjoner</h2>
                    <div className='restriction-container'>
                        <Diettbox Diett='Sukkerfri' />
                        <Diettbox Diett='Lavkarbo' />
                        <Diettbox Diett='Redusert Saltinnhold' />
                        <Diettbox Diett='Keto' />
                        <Diettbox Diett='Diabetisk diett' />
                        <Diettbox Diett='Laktosefri' />
                        <Diettbox Diett='Lavprotein' />
                        <Diettbox Diett='Høyt fiberinnhold' />
                    </div>
                    <div className="config-container">
                        <button className='generate button'>Oppdater restriksjoner</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default pasientadministrasjon