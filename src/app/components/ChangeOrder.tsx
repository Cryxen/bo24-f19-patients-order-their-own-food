import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish } from "@/features/meals/types"
import { OrderClass } from "@/features/orders/classes"
import { Order, orderSize } from "@/features/orders/types"
import { ChangeEvent, useState, MouseEvent, useEffect, SetStateAction, Dispatch } from "react"

const ChangeOrder = (props: { order: OrderClass, fetchAllOrders: () => void, setShowChangeOrder: Dispatch<SetStateAction<boolean>> }) => {
    const { order, fetchAllOrders, setShowChangeOrder } = props


    const [newMealPlanToUpdate, setNewMealPlanToUpdate] = useState<MealPlan>()
    const [mealPlansByDate, setMealPlansByDate] = useState<MealPlan[]>([])
    const [orderToUpdate, setOrderToUpdate] = useState<Order>(order)
    const [orderSizes, setOrderSizes] = useState<orderSize[]>([])
    useEffect(() => {
        fetchMealPlansByDate()
        setOrderSizes([{ sizeNumber: "0.75", sizeName: "liten" }, { sizeNumber: "1", sizeName: "medium" }, { sizeNumber: "1.25", sizeName: "stor" }])
    }, [])

    const remainingOrderSizes = orderSizes.filter(el => el.sizeNumber !== order.size)

    const fetchMealPlansByDate = async () => {
        const date = new Date()
        const response = await fetch('/api/mealPlans?date=' + date.toDateString())
        if (response.status === 200) {
            const data = await response.json()
            setMealPlansByDate(data.data)
        }
    }

    const handleMealPlanChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const chosenMealPlan = mealPlansByDate.filter(el => el.id === parseInt(event.target.value))
        setNewMealPlanToUpdate(chosenMealPlan[0])
        if (chosenMealPlan) {
            setOrderToUpdate(prev =>
            ({
                ...prev,
                mealPlanId: (chosenMealPlan[0].id as number),
                mealPlan: chosenMealPlan[0]
            })
            )
        }
    }

    const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const sizes: orderSize["sizeNumber"][] = ["0.75", "1", "1.25"] //typeguarding
        if (sizes.includes(event.target.value as orderSize["sizeNumber"])) {
            setOrderToUpdate(prev => ({
                ...prev,
                size: event.target.value as orderSize["sizeNumber"]
            }))
        }
    }

    const handleUpdateButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (newMealPlanToUpdate) {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: JSON.stringify(orderToUpdate)
            })
            console.log(response)
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                fetchAllOrders()
                setShowChangeOrder(false)
            }
        }
    }


    return (
        <form key={order.id}>
            <label htmlFor="todaysMealPlans" className="tekstEndring">Velg rett:</label>
            <select name="todaysMealPlans" id="todaysMealPlans" onChange={handleMealPlanChange} className="dropdownChange">
                <option value={0}>
                    Velg nytt måltid:
                </option>
                {mealPlansByDate.map(el => {
                    let mainDish: string = 'undefined'
                    let sideDish: string = 'undefined'
                    el.meals.map(meal => {
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.meal?.category as unknown as MainDish) ?
                            mainDish = meal.meal?.mealName as string : sideDish = meal.meal?.mealName as string
                    })
                    return (<option key={el.id} value={el.id}>
                        Hovedrett: {mainDish} - Siderett: {sideDish}
                    </option>)
                })}
            </select>
            <p className="tekstEndringKom">Kommentar: {newMealPlanToUpdate?.description}</p>
            <select name="mealPlanSize" id="mealPlanSize" onChange={handleSizeChange} className="dropdownChange">
                <option value={order.size}>{order.mealSize}</option>
                {remainingOrderSizes.map(size =>
                    <option key={size.sizeNumber} value={size.sizeNumber}>{size.sizeName}</option>
                )}
            </select>
            <button onClick={handleUpdateButton} className="saveChangeButton">Lagre endring</button>
        </form>
    )
}
export default ChangeOrder