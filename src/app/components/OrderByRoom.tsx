import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish } from "@/features/meals/types"
import { OrderClass } from "@/features/orders/classes"
import { Order } from "@/features/orders/types"
import { MouseEvent, useState } from "react"

const OrderByRoom = (props: { ordersByRoom: Order[] }) => {
    const [showChangeOrder, setShowChangeOrder] = useState<boolean>(false)
    const [mealPlansByDate, setMealPlansByDate] = useState<MealPlan[]>([])

    const { ordersByRoom } = props

    const fetchMealPlansByDate = async () => {
        const date = new Date()
        const response = await fetch('/api/mealPlans?date=' + date.toDateString())
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
            setMealPlansByDate(data.data)
        }
    }

    const handleOrderChangeButton = async (event: MouseEvent<HTMLButtonElement>) => {
        await fetchMealPlansByDate()
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
                            <form key={order.id}>
                                <label htmlFor="todaysMealPlans">Velg rett:</label>
                                <select name="todaysMealPlans" id="todaysMealPlans">
                                    {mealPlansByDate.map(el => 
                                        <option key={el.id} value={el.id}>
                                            
                                            test
                                        </option>
                                    )}
                                </select>
                            </form>
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