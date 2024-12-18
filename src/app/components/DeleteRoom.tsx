"use client"
import { Room } from "@/features/rooms/types"
import ConfirmationWindow from "./ComfirmationWindow"
import { Dispatch, MouseEvent, SetStateAction, useState } from "react"

const DeleteRoom = (props: { room: Room, setSelectedRoom: Dispatch<SetStateAction<Room>>, setShowRestrictions: Dispatch<SetStateAction<boolean>>, fetchAllRooms: () => {} }) => {
    const { room, setSelectedRoom, setShowRestrictions, fetchAllRooms } = props
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false)

    const handleDeleteRoomButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowDeleteConfirmation(true)
    }

    const handleConfirmPress = async () => {
        setShowDeleteConfirmation(false)
        const response = await fetch('/api/rooms?roomNumber=' + room.roomNumber, {
            method: 'DELETE'
        })
        if (response.status === 200) {
            const data = await response.json()
            setSelectedRoom({
                roomNumber: 0,
                dietaryRestrictions: [],
                consistancyRestrictions: [],
                allergyRestrictions: [],
                intoleranceRestrictions: [],
                dietaryNeeds: []
            })
            fetchAllRooms()
            setShowRestrictions(false)
        }
    }
    return (
        <>
            <button className='generate button' onClick={handleDeleteRoomButton}>Slett rom</button>
            {showDeleteConfirmation ?
                <ConfirmationWindow confirmButton="Slett rom" declineButton="Gå tilbake" handleConfirmButtonPress={handleConfirmPress} handleDeclineButtonPress={() => { setShowDeleteConfirmation(false) }} message={"Er du sikker på at du ønsker å slette rom " + room.roomNumber} />
                : ''}
        </>
    )
}
export default DeleteRoom