import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish, SIDE_DISH, SideDish } from "@/features/meals/types"
import { OrderClass } from "@/features/orders/classes"
import { Order } from "@/features/orders/types"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import ChangeOrder from "./ChangeOrder"
import { PastOrder } from "@/features/pastOrder/types"

const OrderByRoom = (props: { ordersByRoom: Order[], fetchAllOrders: () => void }) => {
    const [showChangeOrder, setShowChangeOrder] = useState<boolean>(false)
    const [pastOrdersByRooms, setPastOrdersByRooms] = useState<PastOrder[]>([])
    const { ordersByRoom, fetchAllOrders } = props

    useEffect(() => {
        populatePastOrdersByRooms()

    }, [])

    const populatePastOrdersByRooms = () => {
        const date = new Date()
        ordersByRoom.map(order => {
            let mainDish: string = 'undefined'
            let sideDish: string = 'undefined'
            order.mealPlan.meals.map(meal => {
                (MAIN_DISH as unknown as MainDish[]).includes(meal.meal?.category as unknown as MainDish) ?
                    mainDish = meal.meal?.mealName as string : sideDish = meal.meal?.mealName as string
            })
            const pastOrderToAdd: PastOrder = {
                date: date.toDateString(),
                roomNumber: order.roomNumber,
                size: order.size,
                mainDish: mainDish,
                sideDish: sideDish
            }

            if (!pastOrdersByRooms.includes(pastOrderToAdd)) {
                console.log("true")
                setPastOrdersByRooms(prev => [
                    ...prev,
                    pastOrderToAdd
                ])
            }
        })
    }


    const handleOrderChangeButton = async (event: MouseEvent<HTMLButtonElement>) => {
        setShowChangeOrder(!showChangeOrder)
    }

    const deleteOrderFromDb = async (orderId: number): Promise<void> => {
        const response = await fetch('/api/orders?deleteId=' + orderId, {
            method: 'DELETE'
        })
        if (response.status === 200) {
            const data = await response.json()
            console.log(orderId)
            console.log(data)
            fetchAllOrders() // Fetch new orders
        }
    }

    const handleMarkDeliveredButton = async (event: MouseEvent<HTMLButtonElement>) => {
        pastOrdersByRooms.map(async el => {
            const response = await fetch('/api/pastOrder', {
                method: 'POST',
                body: JSON.stringify(el)
            })
            if (response.status === 200) {
                const data = await response.json()
                ordersByRoom.forEach(async el => {
                    if (typeof el.id === "number")
                        await deleteOrderFromDb(el.id)
                });
            }
        }
        )
    }

    return (
        <section className="dish-section">
            <div className="container"><h4 className="room">Rom {ordersByRoom[0]?.roomNumber}</h4></div>
            <div className="dish-view container">
                {ordersByRoom.map(order => {
                    const orderClass = new OrderClass(order.id!, order.size, order.roomNumber, order.mealPlanId, order.mealPlan, "test")
                    let mainDish: string = 'undefined'
                    let sideDish: string = 'undefined'

                    orderClass?.mealPlan?.meals?.map(meal => {
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.meal?.category as unknown as MainDish) ?
                            mainDish = meal.meal?.mealName as string : sideDish = meal.meal?.mealName as string
                    })
                    return (
                        showChangeOrder ?
                            <ChangeOrder key={order.id} order={orderClass} fetchAllOrders={fetchAllOrders} setShowChangeOrder={setShowChangeOrder} />
                            :
                            <p className="dish" key={order.id}>{mainDish} med {sideDish} - {orderClass.mealSize}</p>
                    )
                })}
            </div>
            <div className="select container">
                <button className="select-button" onClick={handleOrderChangeButton}>Endre bestilling</button>
                <button className="select-button" onClick={handleMarkDeliveredButton}>Merk levert</button>
            </div>
        </section>
    )
}
export default OrderByRoom