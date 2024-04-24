"use client"
import Layout from "@/app/components/layout"
import '../../styles/foodorder.scss'
import '../../styles/minidiet.scss';
import { useEffect, useState } from "react"
import { Room } from "@/features/rooms/types"
import ChangePatientRoom from "@/app/components/ChangePatientRoom"
import { Allergy } from "@/features/allergyRestrictions/types"

const Foodorders = () => {
    const [roomsFromDb, setRoomsFromDb] = useState<Room[]>([])
    const [selectedRoom, setSelectedRoom] = useState<Room>({
        roomNumber: 0,
        dietaryRestrictions: [],
        consistancyRestrictions: [],
        allergyRestrictions: [],
        intoleranceRestrictions: [],
        dietaryNeeds: []
    })
    useEffect(() => {
        fetchAllRooms();
        fetchTodaysMealPlans();
    }, []);

    const fetchTodaysMealPlans = async (): Promise<void> => {
        try {
            const date = new Date()
            const response = await fetch('/api/mealPlans?date=' + date.toDateString)
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {

        }
    }

    const fetchAllRooms = async (): Promise<void> => {
        try {
            const response = await fetch('/api/rooms');
            if (!response.ok) {
                throw new Error('Failed to fetch rooms');
            }
            const data = await response.json();
            setRoomsFromDb(data.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const DietaryInfoComp = ({ dietType, dietName }: { dietType: string; dietName: string | undefined }) => {
        return (
            <article className='Minibox'>
                <div className="Topbox">
                    <p className='textDiet'>{dietType}</p>
                </div>

                <div className="Bottombox">
                    <p className='textDiet'>{dietName}</p>
                </div>
            </article>
        );
    };


    console.log("Valgt rom:", selectedRoom);

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Dagens meny:</h1>
                <div className="main-wrapper">
                    <ChangePatientRoom roomsFromDb={roomsFromDb} setSelectedRoom={setSelectedRoom} selectedRoom={selectedRoom} />
                    <h3 className="diet-info">Diett info:</h3>
                    <div className="diet container">


                        <div className="boxInfoComp">
                            {selectedRoom.allergyRestrictions && selectedRoom.allergyRestrictions.length > 0 && selectedRoom.allergyRestrictions.map((restriction, index) => (
                                <DietaryInfoComp key={index} dietType="Allergier" dietName={restriction.allergyRestricionId} />
                            ))}
                            {selectedRoom.dietaryRestrictions && selectedRoom.dietaryRestrictions.length > 0 && selectedRoom.dietaryRestrictions.map((restriction, index) => (
                                <DietaryInfoComp key={index} dietType="Diettrestriksjoner" dietName={restriction.dietaryRestrictionId} />
                            ))}
                            {selectedRoom.consistancyRestrictions && selectedRoom.consistancyRestrictions.length > 0 && selectedRoom.consistancyRestrictions.map((restriction, index) => (
                                <DietaryInfoComp key={index} dietType="Konsistensrestriksjoner" dietName={restriction.foodConsistencyRestrictionId} />
                            ))}
                            {selectedRoom.intoleranceRestrictions && selectedRoom.intoleranceRestrictions.length > 0 && selectedRoom.intoleranceRestrictions.map((restriction, index) => (
                                <DietaryInfoComp key={index} dietType="Intoleranser" dietName={restriction.intolleranceRestrictionId} />
                            ))}
                            {selectedRoom.dietaryNeeds && selectedRoom.dietaryNeeds.length > 0 && selectedRoom.dietaryNeeds.map((restriction, index) => (
                                <DietaryInfoComp key={index} dietType="Andre kostbehov" dietName={restriction.dietaryNeedId} />
                            ))}
                            {!selectedRoom.allergyRestrictions.length && !selectedRoom.dietaryRestrictions.length && !selectedRoom.consistancyRestrictions.length && !selectedRoom.intoleranceRestrictions.length && !selectedRoom.dietaryNeeds.length && (
                                <p>Ingen diettbehov registert på dette rommet</p>
                            )}

                        </div>


                    </div>
                    <div className="order-container">
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td className="display-table">Bilde av mat 1</td>
                                    <td className="display-table">Beskrivelse av mat 1</td>
                                    <td className="order-config">
                                        <select className="portion dropdown">
                                            <option className="portion-option">Porsjon</option>
                                            <option className="portion-option">Liten</option>
                                            <option className="portion-option">Medium</option>
                                            <option className="portion-option">Stor</option>
                                        </select>
                                        <button className="portions select-button">Små</button>
                                        <button className="portions select-button">Medium</button>
                                        <button className="portions select-button">Stor</button>
                                        <button className="select-button">Bestill</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-container">
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td className="display-table">Bilde av mat 2</td>
                                    <td className="display-table">Beskrivelse av mat 2</td>
                                    <td className="order-config">
                                        <select className="portion dropdown">
                                            <option className="portion-option">Porsjon</option>
                                            <option className="portion-option">Liten</option>
                                            <option className="portion-option">Medium</option>
                                            <option className="portion-option">Stor</option>
                                        </select>
                                        <button className="portions select-button">Små</button>
                                        <button className="portions select-button">Medium</button>
                                        <button className="portions select-button">Stor</button>
                                        <button className="select-button">Bestill</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-container">
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <td className="display-table">Bilde av mat 3</td>
                                    <td className="display-table">Beskrivelse av mat 3</td>
                                    <td className="order-config">
                                        <select className="portion dropdown">
                                            <option className="portion-option">Porsjon</option>
                                            <option className="portion-option">Liten</option>
                                            <option className="portion-option">Medium</option>
                                            <option className="portion-option">Stor</option>
                                        </select>
                                        <button className="portions select-button">Små</button>
                                        <button className="portions select-button">Medium</button>
                                        <button className="portions select-button">Stor</button>
                                        <button className="select-button">Bestill</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-container">
                        <table className="red order-table">
                            <tbody>
                                <tr>
                                    <td className="display-table">Bilde av mat 4</td>
                                    <td className="display-table">Beskrivelse av mat 4</td>
                                    <td className="order-config">
                                        <select className="portion dropdown">
                                            <option className="portion-option">Porsjon</option>
                                            <option className="portion-option">Liten</option>
                                            <option className="portion-option">Medium</option>
                                            <option className="portion-option">Stor</option>
                                        </select>
                                        <button className="portions select-button">Små</button>
                                        <button className="portions select-button">Medium</button>
                                        <button className="portions select-button">Stor</button>
                                        <button className="select-button">Bestill</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Foodorders