"use client"
import Layout from '@/app/components/layout'
import '../../styles/orderlist.scss'
import { useEffect, useState } from 'react'
import { Order } from '@/features/orders/types'
import OrderByRoom from '@/app/components/OrderByRoom'
import { Room } from '@/features/rooms/types'

const Orderlist = () => {
    const [ordersFromDb, setOrdersFromDb] = useState<Order[]>([])
    const [roomsFromDb, setRoomsFromDb] = useState<Room[]>([])
    useEffect(() => {
        fetchAllOrders()
        fetchAllRooms()
    }, [])

    const fetchAllOrders = async (): Promise<void> => {
        const response = await fetch('/api/orders')
        if (response.status === 200) {
            const data = await response.json()
            setOrdersFromDb(data.data)
        }
    }

    const fetchAllRooms = async (): Promise<void> => {
        const response = await fetch('/api/rooms')
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
            setRoomsFromDb(data.data)
        }
    }

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Bestillinger</h1>
                <div className="main-wrapper">
                    {roomsFromDb.map(room => {
                        const ordersByRoom = []
                        for (const order of ordersFromDb) {
                            if (room.roomNumber === order.roomNumber)
                                ordersByRoom.push(order)
                        }
                        return (
                            <OrderByRoom key={room.roomNumber} ordersByRoom={ordersByRoom}/>
                        )
                    })}
                    <section className="dish-section">
                        <div className="container"><h4 className="room">Room 2</h4></div>
                        <div className="dish-view container">
                            <p className="dish">Rett 1 - liten</p>
                            <p className="dish">Rett 2</p>
                            <p className="dish">Rett 3</p>
                        </div>
                        <div className="select container">
                            <button className="select-button">Endre bestilling</button>
                            <button className="select-button">Merk levert</button>
                        </div>
                    </section>
                    <section className="dish-section">
                        <div className="container"><h4 className="room">Room 3</h4></div>
                        <div className="dish-view container">
                            <p className="dish">Rett 1 - liten</p>
                            <p className="dish">Rett 2</p>
                            <p className="dish">Rett 3</p>
                            <p className='dish'>Rett 4</p>
                            <p className='dish'>Rett 5 - liten</p>
                        </div>
                        <div className="select container">
                            <button className="select-button">Endre bestilling</button>
                            <button className="select-button">Merk levert</button>
                        </div>
                    </section>
                    <section className="dish-section">
                        <div className="container"><h4 className="room">Room X</h4></div>
                        <div className="dish-view container">
                            <p className="dish">Rett 1 - liten</p>
                            <p className="dish">Rett 2</p>
                            <p className="dish">Rett 3</p>
                        </div>
                        <div className="select container">
                            <button className="select-button">Endre bestilling</button>
                            <button className="select-button">Merk levert</button>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}
export default Orderlist