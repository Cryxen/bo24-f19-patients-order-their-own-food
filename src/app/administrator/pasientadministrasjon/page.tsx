"use client"
import Layout from "@/app/components/layout"
import Diettbox from "@/app/components/Diettbox"
import '../../styles/pasientadministrasjon.scss'
import '../../styles/globals.scss'
import { useEffect, useState } from "react"
import { Room } from "@/features/rooms/types"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"

/*VIRKER KUN PÅ DEKSTOP PER NÅ*/

const pasientadministrasjon = () => {
    const [roomsFromDb, setRoomsFromDb] = useState<Room[]>([])
    const [dietaryRestrictionsFromDb, setDietaryRestrictionsFromDb] = useState<DietaryRestriction[]>([])
    const [consistencyRestrictionsFromDb, setConsistencyRestrictionsFromDb] = useState<FoodConsistency[]>([])

    useEffect(() => {
        fetchAllRooms()
        fetchAllDietaryRestrictions()
        fetchAllConsistencyRestrictions()
    }, [])

    const fetchAllRooms = async () => {
        const response = await fetch('/api/rooms')
        if (response.status === 200) {
            const data = await response.json()
            setRoomsFromDb(data.data)
        }
    }

    const fetchAllDietaryRestrictions = async () => {
        const response = await fetch('/api/dietaryRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setDietaryRestrictionsFromDb(data.data)
        }
    }

    const fetchAllConsistencyRestrictions = async () => {
        const response = await fetch('/api/consistencyRestrictions')
        if(response.status === 200)
        {
            const data = await response.json()
            setConsistencyRestrictionsFromDb(data.data)
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
                    <h2 className="title">Velg diettrestriksjoner</h2>
                    <div className='restriction-container'>
                        {dietaryRestrictionsFromDb?.map(el => {
                            return <Diettbox key={el.dietaryRestriction} Diett={el.dietaryRestriction} />
                        })}
                    </div>
                    <h2 className="title">Velg konsistens restriksjoner</h2>
                    <div className='restriction-container'>
                        {consistencyRestrictionsFromDb?.map(el => {
                            return <Diettbox key={el.consistency} Diett={el.consistency} />
                        })}
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