import { MealPlan } from "@/features/mealPlans/types"
import { MAIN_DISH, MainDish } from "@/features/meals/types"
import { Order } from "@/features/orders/types"
import { ChangeEvent, useState, MouseEvent, useEffect, SetStateAction, Dispatch } from "react"

const ChangeOrder = (props: { order: Order, fetchAllOrders: () => void, setShowChangeOrder: Dispatch<SetStateAction<boolean>> }) => {
    const { order, fetchAllOrders, setShowChangeOrder } = props


    const [newMealPlanToUpdate, setNewMealPlanToUpdate] = useState<MealPlan>()
    const [mealPlansByDate, setMealPlansByDate] = useState<MealPlan[]>([])
    const [orderToUpdate, setOrderToUpdate] = useState<Order>(order)

    useEffect(() => {
        fetchMealPlansByDate()
    }, [])

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
            <label htmlFor="todaysMealPlans">Velg rett:</label>
            <select name="todaysMealPlans" id="todaysMealPlans" onChange={handleMealPlanChange}>
                <option value={0}>
                    Velg nytt måltid:
                </option>
                {mealPlansByDate.map(el => {
                    let mainDish: string = 'undefined'
                    let sideDish: string = 'undefined'
                    el.meals.map(meal => {
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.meal.category as unknown as MainDish) ?
                            mainDish = meal.meal.mealName as string : sideDish = meal.meal.mealName as string
                    })
                    return (<option key={el.id} value={el.id}>
                        Hovedrett: {mainDish} - Siderett: {sideDish}
                    </option>)
                })}
            </select>
            <p>Kommentar: {newMealPlanToUpdate?.description}</p>
            <button onClick={handleUpdateButton}>Lagre endring</button>
        </form>
    )
}
export default ChangeOrder