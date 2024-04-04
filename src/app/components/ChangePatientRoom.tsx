import { Room } from "@/features/rooms/types"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

const ChangePatientRoom = (props: { setShowRestrictions: Dispatch<SetStateAction<Boolean>>, roomsFromDb: Room[], setSelectedRoom: Dispatch<SetStateAction<Room>> }) => {

    const { setShowRestrictions, setSelectedRoom, roomsFromDb } = props

    const handleRoomChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        if (parseInt(event.target.value) !== 0) {
            const room: Room[] = roomsFromDb.filter(el => el.roomNumber === parseInt(event.target.value))
            setShowRestrictions(true)
            setSelectedRoom(room[0])
        }
        else setShowRestrictions(false)
    }

    return (
        <div className="room-container">
            <h2 className="title">Velg rom</h2>
            <select name="room" id="room" className="room dropdown" onChange={handleRoomChange} defaultValue="0">
                <option value="0">Velg rom</option>
                {roomsFromDb?.map(room => {
                    return <option key={room.roomNumber} value={room.roomNumber}>{room.roomNumber}</option>
                })}
            </select>
        </div>
    )
}
export default ChangePatientRoom