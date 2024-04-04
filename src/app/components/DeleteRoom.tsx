"use client"
import { Room } from "@/features/rooms/types"
import ConfirmationWindow from "./ComfirmationWindow"
import { Dispatch, MouseEvent, SetStateAction, useState } from "react"

const DeleteRoom = (props: { room: Room, setSelectedRoom: Dispatch<SetStateAction<Room>>, setShowRestrictions: Dispatch<SetStateAction<boolean>> }) => {
    const { room, setSelectedRoom, setShowRestrictions } = props
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false)

    const handleDeleteRoomButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowDeleteConfirmation(true)
    }

    const handleConfirmPress = async () => {
        setShowDeleteConfirmation(false)
        console.log(room)
        const response = await fetch('/api/rooms?roomNumber=' + room.roomNumber, {
            method: 'DELETE'
        })
        console.log(response)
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
            setSelectedRoom({
                roomNumber: 0,
                dietaryRestrictions: [],
                consistancyRestrictions: [],
                allergyRestrictions: [],
                intoleranceRestrictions: [],
                dietaryNeeds: []
            }            )
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