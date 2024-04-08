import { OrderClass } from "@/features/orders/classes"
import {  Order } from "@/features/orders/types"

const OrderByRoom = (props: {ordersByRoom: Order[]}) => {
    const {ordersByRoom} = props
return (
    <section className="dish-section">
    <div className="container"><h4 className="room">Rom {ordersByRoom[0]?.roomNumber}</h4></div>
    <div className="dish-view container">
        {ordersByRoom.map(order => {
            const orderClass = new OrderClass(order.id, order.size, order.roomNumber, order.mealPlanId, order.mealPlan, "test")
            return( <p className="dish" key={order.id}>{orderClass.mealPlan.description} - {orderClass.mealSize}</p>
        )})}
    </div>
    <div className="select container">
        <button className="select-button">Endre bestilling</button>
        <button className="select-button">Merk levert</button>
    </div>
</section>
)
}
export default OrderByRoom