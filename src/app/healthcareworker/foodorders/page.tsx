"use client"
import Layout from "@/app/components/layout"
import '../../styles/foodorder.scss'
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
        fetchAllRooms()
    }, [])
    const fetchAllRooms = async (): Promise<void> => {
        const response = await fetch('/api/rooms')
        if (response.status === 200) {
            const data = await response.json()
            setRoomsFromDb(data.data)
            console.log(data.data)
        }
    }


    return (
        <Layout>
            <div className="mainDiv">
                <h1>Dagens meny:</h1>
                <div className="main-wrapper">
                    <ChangePatientRoom roomsFromDb={roomsFromDb} setSelectedRoom={setSelectedRoom} selectedRoom={selectedRoom} />
                    <div className="diet container">
                        <p className="diet-info">Diett info:</p>
                        {selectedRoom.allergyRestrictions.length > 0 ?
                            <>
                                <p>Allergi:</p>
                                <ul>
                                    {selectedRoom.allergyRestrictions.map(el =>
                                        <li key={el.allergyRestricionId}>{el.allergyRestricionId}</li>
                                    )}
                                </ul>
                            </> : ''
                        }
                        {selectedRoom.dietaryRestrictions.length > 0 ?
                            <>
                                <p>Diett:</p>
                                <ul>
                                    {selectedRoom.dietaryRestrictions.map(el =>
                                        <li key={el.dietaryRestrictionId}>{el.dietaryRestrictionId}</li>
                                    )}
                                </ul>
                            </> : ''
                        }
                        {selectedRoom.consistancyRestrictions.length > 0 ?
                            <>
                                <p>Konsistens:</p>
                                <ul>
                                    {selectedRoom.consistancyRestrictions.map(el =>
                                        <li key={el.foodConsistencyRestrictionId}>{el.foodConsistencyRestrictionId}</li>
                                    )}
                                </ul>
                            </> : ''
                        }
                        {selectedRoom.intoleranceRestrictions.length > 0 ?
                            <>
                                <p>Intoleranse:</p>
                                <ul>
                                    {selectedRoom.intoleranceRestrictions.map(el =>
                                        <li key={el.intolleranceRestrictionId}>{el.intolleranceRestrictionId}</li>
                                    )}
                                </ul>
                            </> : ''
                        }
                        {selectedRoom.dietaryNeeds.length > 0 ?
                            <>
                                <p>Andre kostbehov:</p>
                                <ul>
                                    {selectedRoom.dietaryNeeds.map(el =>
                                        <li key={el.dietaryNeedId}>{el.dietaryNeedId}</li>
                                    )}
                                </ul>
                            </> : ''
                        }
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