import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish } from "@/features/meals/types"
import { OrderClass } from "@/features/orders/classes"
import { Order } from "@/features/orders/types"
import { ChangeEvent, MouseEvent, useState } from "react"
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
                    return (
                        showChangeOrder ?
                            <ChangeOrder key={order.id} order={order} fetchAllOrders={fetchAllOrders} setShowChangeOrder={setShowChangeOrder} />
                            :
                            <p className="dish" key={order.id}>{orderClass.mealPlan.description} - {orderClass.mealSize}</p>

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