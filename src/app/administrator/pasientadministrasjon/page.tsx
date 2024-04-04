"use client"
import Layout from "@/app/components/layout"
import Diettbox from "@/app/components/Diettbox"
import '../../styles/pasientadministrasjon.scss'
import '../../styles/globals.scss'
import { ChangeEvent, useEffect, useState } from "react"
import { Room } from "@/features/rooms/types"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"
import { Allergy } from "@/features/allergyRestrictions/types"
import { Intolerance } from "@/features/intoleranceRestrictions/types"
import { DietaryNeeds } from "@/features/DietaryNeeds/types"
import IndividualRoom from "@/app/components/IndividualRoom"

/*VIRKER KUN PÅ DEKSTOP PER NÅ*/

const pasientadministrasjon = () => {
    const [roomsFromDb, setRoomsFromDb] = useState<Room[]>([])
    const [dietaryRestrictionsFromDb, setDietaryRestrictionsFromDb] = useState<DietaryRestriction[]>([])
    const [consistencyRestrictionsFromDb, setConsistencyRestrictionsFromDb] = useState<FoodConsistency[]>([])
    const [allergyRestrictionsFromDb, setAllergyRestrictionsFromDb] = useState<Allergy[]>([])
    const [intoleranceRestrictionsFromDb, setIntoleranceRestrictionsFromDb] = useState<Intolerance[]>([])
    const [dietaryNeedsFromDb, setDietaryNeedsFromDb] = useState<DietaryNeeds[]>([])
    const [selectedRoom, setSelectedRoom] = useState<Room>({
        roomNumber: 0,
        dietaryRestrictions: [],
        consistancyRestrictions: [],
        allergyRestrictions: [],
        intoleranceRestrictions: [],
        dietaryNeeds: []
    })
    const [showRestrictions, setShowRestrictions] = useState<Boolean>(false)

    useEffect(() => {
        fetchAllRooms()
        fetchAllDietaryRestrictions()
        fetchAllConsistencyRestrictions()
        fetchAllAllergyRestrictions()
        fetchAllIntoleranceRestrictions()
        fetchAllDietaryNeeds()
    }, [])

    const fetchAllRooms = async () => {
        const response = await fetch('/api/rooms')
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
            if (data.success === true)
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
        if (response.status === 200) {
            const data = await response.json()
            setConsistencyRestrictionsFromDb(data.data)
        }
    }

    const fetchAllAllergyRestrictions = async () => {
        const response = await fetch('/api/allergyRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setAllergyRestrictionsFromDb(data.data)
        }
    }

    const fetchAllIntoleranceRestrictions = async () => {
        const response = await fetch('/api/intoleranceRestrictions')
        if (response.status === 200) {
            const data = await response.json()
            setIntoleranceRestrictionsFromDb(data.data)
        }
    }

    const fetchAllDietaryNeeds = async () => {
        const response = await fetch('/api/dietaryNeeds')
        if (response.status === 200) {
            const data = await response.json()
            setDietaryNeedsFromDb(data.data)
        }
    }

    const handleRoomChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        if (parseInt(event.target.value) !== 0) {
            const room: Room[] = roomsFromDb.filter(el => el.roomNumber === parseInt(event.target.value))
            setShowRestrictions(true)
            setSelectedRoom(room[0])
        }
        else setShowRestrictions(false)
    }

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Pasientadministrasjon</h1>
                <div className="main-wrapper">
                    <div className="room-container">
                        <h2 className="title">Velg rom</h2>
                        <select name="room" id="room" className="room dropdown" onChange={handleRoomChange} defaultValue="0">
                            <option value="0">Velg rom</option>
                            {roomsFromDb?.map(room => {
                                return <option key={room.roomNumber} value={room.roomNumber}>{room.roomNumber}</option>
                            })}
                        </select>
                    </div>
                    {
                        showRestrictions ? <IndividualRoom
                            room={selectedRoom}
                            dietaryRestrictions={dietaryRestrictionsFromDb}
                            consistencyRestrictions={consistencyRestrictionsFromDb}
                            allergyRestriction={allergyRestrictionsFromDb}
                            intoleranceRestriction={intoleranceRestrictionsFromDb}
                            dietaryNeeds={dietaryNeedsFromDb} />
                            : ''
                    }

                </div>
            </div>
        </Layout>
    )
}

export default pasientadministrasjon