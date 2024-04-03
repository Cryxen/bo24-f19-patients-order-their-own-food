import { DietaryNeeds } from "@/features/DietaryNeeds/types"
import { Allergy } from "@/features/allergyRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { Intolerance } from "@/features/intoleranceRestrictions/types"
import { Room } from "@/features/rooms/types"
import Diettbox from "./Diettbox"
import { ChangeEvent, useEffect, useState } from "react"

const IndividualRoom = (props: { room: Room, dietaryRestrictions: DietaryRestriction[], consistencyRestrictions: FoodConsistency[], allergyRestriction: Allergy[], intoleranceRestriction: Intolerance[], dietaryNeeds: DietaryNeeds[] }) => {
    const { room, dietaryRestrictions, consistencyRestrictions: consistencyRestrictions, allergyRestriction: allergyRestrictions, intoleranceRestriction: intoleranceRestrictions, dietaryNeeds } = props
    const [roomToUpdate, setRoomToUpdate] = useState<Room>({
        roomNumber: 0,
        dietaryRestrictions: [],
        consistancyRestrictions: [],
        allergyRestrictions: [],
        intoleranceRestrictions: [],
        dietaryNeeds: []
    })

    const checkForCommonRestrictions = (roomRestrictions: DietaryRestriction[] | FoodConsistency[] | Allergy[] | Intolerance[] | DietaryNeeds[], restriction: string): boolean => { //Made from inspiration of chatGPT
        if (JSON.stringify(roomRestrictions).includes(restriction))
            return true
        return false
    }

    useEffect(() => {
        setRoomToUpdate(room)
    }, [])


    const handleDiettRestrictionChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setRoomToUpdate(prev =>
            ({
                ...prev,
                dietaryRestrictions: [...prev.dietaryRestrictions, { dietaryRestrictionId: event.target.value }]
            }))
        }
        else {
            setRoomToUpdate(prev => ({
                ...prev,
                dietaryRestrictions: prev.dietaryRestrictions.filter(el => el.dietaryRestrictionId !== event.target.value)
            }))
        }
        console.log(roomToUpdate.dietaryRestrictions)

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
                    return <Diettbox key={el.consistency} Diett={el.consistency} Checked={roomToUpdate?.consistancyRestrictions?.includes(el) ? true : false} />
                })}
            </div>
            <h2 className="title">Velg allergier</h2>
            <div className='restriction-container'>
                {allergyRestrictions?.map(el => {
                    return <Diettbox key={el.allergy} Diett={el.allergy} Checked={roomToUpdate?.allergyRestrictions?.includes(el) ? true : false} />
                })}
            </div>
            <h2 className="title">Velg intoleranser</h2>
            <div className='restriction-container'>
                {intoleranceRestrictions?.map(el => {
                    return <Diettbox key={el.intolerance} Diett={el.intolerance} Checked={roomToUpdate?.intoleranceRestrictions?.includes(el) ? true : false} />
                })}
            </div>
            <h2 className="title">Velg andre kostbehov:</h2>
            <div className='restriction-container'>
                {dietaryNeeds?.map(el => {
                    return <Diettbox key={el.dietaryNeed} Diett={el.dietaryNeed} Checked={roomToUpdate?.dietaryNeeds?.includes(el) ? true : false} />
                })}
            </div>
            <div className="config-container">
                <button className='generate button'>Oppdater restriksjoner</button>
            </div>
        </>
    )
}
export default IndividualRoom