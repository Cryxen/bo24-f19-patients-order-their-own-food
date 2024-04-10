import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish, SIDE_DISH, SideDish } from "@/features/meals/types"
import { OrderClass } from "@/features/orders/classes"
import { Order } from "@/features/orders/types"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import ChangeOrder from "./ChangeOrder"

const OrderByRoom = (props: { ordersByRoom: Order[], fetchAllOrders: () => void }) => {
    const [showChangeOrder, setShowChangeOrder] = useState<boolean>(false)
    const { ordersByRoom, fetchAllOrders } = props

    
    const handleOrderChangeButton = async (event: MouseEvent<HTMLButtonElement>) => {
        setShowChangeOrder(!showChangeOrder)
    }



    return (
        <section className="dish-section">
            <div className="container"><h4 className="room">Rom {ordersByRoom[0]?.roomNumber}</h4></div>
            <div className="dish-view container">
                {ordersByRoom.map(order => {
                    const orderClass = new OrderClass(order.id, order.size, order.roomNumber, order.mealPlanId, order.mealPlan, "test")
                    let mainDish: string = 'undefined'
                    let sideDish: string = 'undefined'
                    console.log(orderClass)
                    console.log(order)

                    orderClass?.mealPlan?.meals?.map(meal => {
                        console.log(meal);
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.meal.category as unknown as MainDish) ?
                            mainDish = meal.meal.mealName as string : sideDish = meal.meal.mealName as string
                            console.log(mainDish)
                            console.log(sideDish)
                    })
                    return (
                        showChangeOrder ?
                            <ChangeOrder key={order.id} order={order} fetchAllOrders={fetchAllOrders} setShowChangeOrder={setShowChangeOrder} />
                            :
                            <p className="dish" key={order.id}>{mainDish} med {sideDish} - {orderClass.mealSize}</p>
                    )
                })}
            </div>
            <div className="select container">
                <button className="select-button" onClick={handleOrderChangeButton}>Endre bestilling</button>
                <button className="select-button">Merk levert</button>
            </div>
        </section>
    )
}
export default OrderByRoom