import { DietaryNeeds } from "@/features/DietaryNeeds/types"
import { Allergy } from "@/features/allergyRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { Intolerance } from "@/features/intoleranceRestrictions/types"
import { Room } from "@/features/rooms/types"
import Diettbox from "./Diettbox"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import ConfirmationWindow from "./ComfirmationWindow"

const IndividualRoom = (props: { room: Room, dietaryRestrictions: DietaryRestriction[], consistencyRestrictions: FoodConsistency[], allergyRestriction: Allergy[], intoleranceRestriction: Intolerance[], dietaryNeeds: DietaryNeeds[], fetchAllRooms: () => void }) => {
    const { room, dietaryRestrictions, consistencyRestrictions: consistencyRestrictions, allergyRestriction: allergyRestrictions, intoleranceRestriction: intoleranceRestrictions, dietaryNeeds, fetchAllRooms } = props
    const [roomToUpdate, setRoomToUpdate] = useState<Room>({
        roomNumber: 0,
        dietaryRestrictions: [],
        consistancyRestrictions: [],
        allergyRestrictions: [],
        intoleranceRestrictions: [],
        dietaryNeeds: []
    })
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false)

    console.log(room.roomNumber)
    const checkForCommonRestrictions = (roomRestrictions: DietaryRestriction[] | FoodConsistency[] | Allergy[] | Intolerance[] | DietaryNeeds[], restriction: string): boolean => { //Made from inspiration of chatGPT
        if (JSON.stringify(roomRestrictions).includes(restriction))
            return true
        return false
    }

    useEffect(() => {
        setRoomToUpdate(room)
    }, [room])



    const handleDiettRestrictionChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                dietaryRestrictions: [...prev?.dietaryRestrictions, { dietaryRestrictionId: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                dietaryRestrictions: prev?.dietaryRestrictions.filter(el => el.dietaryRestrictionId !== event.target.value)
            }))
        }
    }

    const handleDiettConsistencyChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                consistancyRestrictions: [...prev?.consistancyRestrictions, { consistency: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                consistancyRestrictions: prev?.consistancyRestrictions.filter(el => el.consistency !== event.target.value)
            }))
        }
    }

    const handleDiettAllergyChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                allergyRestrictions: [...prev?.allergyRestrictions, { allergy: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                allergyRestrictions: prev?.allergyRestrictions.filter(el => el.allergy !== event.target.value)
            }))
        }
    }

    const handleDiettIntoleranceChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                intoleranceRestrictions: [...prev?.intoleranceRestrictions, { intolerance: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                intoleranceRestrictions: prev?.intoleranceRestrictions.filter(el => el.intolerance !== event.target.value)
            }))
        }
    }

    const handleDiettDietaryNeedChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                dietaryNeeds: [...prev?.dietaryNeeds, { dietaryNeed: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                dietaryNeeds: prev?.dietaryNeeds.filter(el => el.dietaryNeed !== event.target.value)
            }))
        }
    }

    const handleUpdateButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const response = await fetch('/api/rooms', {
            method: "POST",
            body: JSON.stringify(roomToUpdate)
        })
        if (response.status === 200) {
            const data = await response.json()
            fetchAllRooms()
            console.log(data)
        }
    }

    const handleDeleteRoomButton = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowDeleteConfirmation(true)
    }

    const handleConfirmPress = () => {
        setShowDeleteConfirmation(false)
    }

    

    return (
        <>
            <h2 className="title">Velg diettrestriksjoner</h2>
            <div className='restriction-container'>
                {dietaryRestrictions?.map(el => {
                    return <Diettbox key={el.dietaryRestriction} Diett={el.dietaryRestriction!} Checked={checkForCommonRestrictions(roomToUpdate.dietaryRestrictions, el.dietaryRestriction!)} onChangeMethod={handleDiettRestrictionChange} />
                })}
            </div>
            <h2 className="title">Velg konsistens restriksjoner</h2>
            <div className='restriction-container'>
                {consistencyRestrictions?.map(el => {
                    return <Diettbox key={el.consistency} Diett={el.consistency} Checked={checkForCommonRestrictions(roomToUpdate.consistancyRestrictions, el.consistency!)} onChangeMethod={handleDiettConsistencyChange} />
                })}
            </div>
            <h2 className="title">Velg allergier</h2>
            <div className='restriction-container'>
                {allergyRestrictions?.map(el => {
                    return <Diettbox key={el.allergy} Diett={el.allergy} Checked={checkForCommonRestrictions(roomToUpdate.allergyRestrictions, el.allergy)} onChangeMethod={handleDiettAllergyChange} />
                })}
            </div>
            <h2 className="title">Velg intoleranser</h2>
            <div className='restriction-container'>
                {intoleranceRestrictions?.map(el => {
                    return <Diettbox key={el.intolerance} Diett={el.intolerance} Checked={checkForCommonRestrictions(roomToUpdate.intoleranceRestrictions, el.intolerance)} onChangeMethod={handleDiettIntoleranceChange} />
                })}
            </div>
            <h2 className="title">Velg andre kostbehov:</h2>
            <div className='restriction-container'>
                {dietaryNeeds?.map(el => {
                    return <Diettbox key={el.dietaryNeed} Diett={el.dietaryNeed} Checked={checkForCommonRestrictions(roomToUpdate.dietaryNeeds, el.dietaryNeed)} onChangeMethod={handleDiettDietaryNeedChange} />
                })}
            </div>
            <div className="config-container">
                <button className='generate button' onClick={handleUpdateButton}>Oppdater restriksjoner</button>
                <button className='generate button' onClick={handleDeleteRoomButton}>Slett rom</button>
                {showDeleteConfirmation ? 
                <ConfirmationWindow confirmButton="Slett rom" declineButton="Gå tilbake" handleConfirmButtonPress={handleConfirmPress} handleDeclineButtonPress={() => {setShowDeleteConfirmation(false)}} message={"Er du sikker på at du ønsker å slette rom " + room.roomNumber}/>
                : ''}
            </div>
        </>
    )
}
export default IndividualRoom