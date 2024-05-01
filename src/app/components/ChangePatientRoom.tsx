import { Room } from "@/features/rooms/types"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

const ChangePatientRoom = (props: { setShowRestrictions?: Dispatch<SetStateAction<boolean>>, roomsFromDb: Room[], setSelectedRoom: Dispatch<SetStateAction<Room>>, selectedRoom: Room }) => {

    const { setShowRestrictions, setSelectedRoom, roomsFromDb, selectedRoom } = props

    const handleRoomChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        if (parseInt(event.target.value) !== 0) {
            const room: Room[] = roomsFromDb.filter(el => el.roomNumber === parseInt(event.target.value))
            if (setShowRestrictions)
                setShowRestrictions(true)
            setSelectedRoom(room[0])
        }
        else {
            setSelectedRoom({
                roomNumber: 0,
                dietaryRestrictions: [],
                consistancyRestrictions: [],
                allergyRestrictions: [],
                intoleranceRestrictions: [],
                dietaryNeeds: []
            })
            if (setShowRestrictions)
                setShowRestrictions(false)
        }
    }

    console.log(roomsFromDb)
    return (
        <div className="room-container">
            <h2 className="title">Velg rom</h2>
            {roomsFromDb.length > 0 ? 
            <select name="room" id="room" className="room dropdown" onChange={handleRoomChange} value={selectedRoom.roomNumber}>
                <option value="0">Velg rom</option>
                {roomsFromDb?.map(room => {
                    return <option key={room.roomNumber} value={room.roomNumber}>{room.roomNumber}</option>
                })}
            </select>
        : 
        <p>Laster rom...</p>    
        }
        </div>
    )
}
export default ChangePatientRoom