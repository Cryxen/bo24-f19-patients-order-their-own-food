import { Order } from "@/features/orders/types"

const OrderByRoom = (props: {ordersByRoom: Order[]}) => {
    const {ordersByRoom} = props
return (
    <section className="dish-section">
    <div className="container"><h4 className="room">Rom {ordersByRoom[0]?.roomNumber}</h4></div>
    <div className="dish-view container">
        {ordersByRoom.map(order => 
            <p className="dish" key={order.id}>{order.mealPlan.description} - {order.size}</p>
        )}
        <p className="dish">Rett 1 - liten</p>
        <p className="dish">Rett 2</p>
        <p className="dish">Rett 3</p>
    </div>
    <div className="select container">
        <button className="select-button">Endre bestilling</button>
        <button className="select-button">Merk levert</button>
    </div>
</section>
)
}
export default OrderByRoom