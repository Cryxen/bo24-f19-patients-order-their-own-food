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
                        if (ordersByRoom.length > 0){
                            return (
                                <OrderByRoom key={room.roomNumber} ordersByRoom={ordersByRoom} fetchAllOrders={fetchAllOrders}/>
                            )}
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default Orderlist