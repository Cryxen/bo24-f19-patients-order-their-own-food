import { Room } from "@/features/rooms/types"
import { ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react"

const AddNewRoom = (props: { setShowNewRoomForm: Dispatch<SetStateAction<boolean>>, setInputRoomNumberChange: Dispatch<SetStateAction<number>>, inputRoomNumberChange: number, setSelectedRoom: Dispatch<SetStateAction<Room>>, showNewRoomForm: Boolean, fetchAllRooms: () => void, setShowRestrictions: Dispatch<SetStateAction<boolean>> }) => {

    const { setShowNewRoomForm, setInputRoomNumberChange, inputRoomNumberChange, setSelectedRoom, showNewRoomForm, fetchAllRooms, setShowRestrictions } = props

    const handleNewRoomButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowNewRoomForm(true)
    }

    const saveNewRoomToDb = async (room: Room) => {
        const response = await fetch('/api/rooms', {
            method: 'POST',
            body: JSON.stringify(room)
        })
        if (response.status === 200) {
            const data = await response.json()
        }
    }

    const handleRoomNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(event.target.value) !== 0)
            setInputRoomNumberChange(parseInt(event.target.value))
        console.log(inputRoomNumberChange)
    }

    const handleAddNewRoom = async (event: MouseEvent<HTMLButtonElement>) => {
        if (inputRoomNumberChange !== 0) {
            setShowNewRoomForm(false)
            const roomToAdd: Room = {
                roomNumber: inputRoomNumberChange,
                dietaryRestrictions: [],
                consistancyRestrictions: [],
                intoleranceRestrictions: [],
                allergyRestrictions: [],
                dietaryNeeds: []
            }
            await saveNewRoomToDb(roomToAdd)
            setSelectedRoom(roomToAdd)
            fetchAllRooms()
            setShowRestrictions(true)
        }
    }

    return (
        showNewRoomForm ?
            <form>
                <label htmlFor="patientRoomNumber">Rom nummer:</label>
                <input onChange={handleRoomNumberChange} type="number" id="patientRoomNumber" value={inputRoomNumberChange} />
                <button onClick={handleAddNewRoom}>Legg til rom</button>
            </form>
            :
            <button className='generate button' onClick={handleNewRoomButton}>Legg til nytt rom</button>
    )
}
export default AddNewRoom