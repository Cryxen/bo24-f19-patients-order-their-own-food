import { DietaryNeeds } from "@/features/DietaryNeeds/types"
import { Allergy } from "@/features/allergyRestrictions/types"
import { FoodConsistency } from "@/features/consistencyRestrictions/types"
import { DietaryRestriction } from "@/features/dietaryRestrictions/types"
import { Intolerance } from "@/features/intoleranceRestrictions/types"
import { Room } from "@/features/rooms/types"
import Diettbox from "./Diettbox"

const IndividualRoom = (props: { room: Room, dietaryRestrictions: DietaryRestriction[], consistencyRestriction: FoodConsistency[], allergyRestriction: Allergy[], intoleranceRestriction: Intolerance[], dietaryNeeds: DietaryNeeds[] }) => {
    const { room, dietaryRestrictions, consistencyRestriction, allergyRestriction, intoleranceRestriction, dietaryNeeds } = props
    console.log(room)
    return (
        <>
            <h2 className="title">Velg diettrestriksjoner</h2>
            <div className='restriction-container'>
                {dietaryRestrictions?.map(el => {
                    return <Diettbox key={el.dietaryRestriction} Diett={el.dietaryRestriction} />
                })}
            </div>
            <h2 className="title">Velg konsistens restriksjoner</h2>
            <div className='restriction-container'>
                {consistencyRestriction?.map(el => {
                    return <Diettbox key={el.consistency} Diett={el.consistency} />
                })}
            </div>
            <h2 className="title">Velg allergier</h2>
            <div className='restriction-container'>
                {allergyRestriction?.map(el => {
                    return <Diettbox key={el.allergy} Diett={el.allergy} />
                })}
            </div>
            <h2 className="title">Velg intoleranser</h2>
            <div className='restriction-container'>
                {intoleranceRestriction?.map(el => {
                    return <Diettbox key={el.intolerance} Diett={el.intolerance} />
                })}
            </div>
            <h2 className="title">Velg andre kostbehov:</h2>
            <div className='restriction-container'>
                {dietaryNeeds?.map(el => {
                    return <Diettbox key={el.dietaryNeed} Diett={el.dietaryNeed} />
                })}
            </div>
            <div className="config-container">
                <button className='generate button'>Oppdater restriksjoner</button>
            </div>
        </>
    )
}
export default IndividualRoom