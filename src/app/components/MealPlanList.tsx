import '@/app/styles/mealplanning.scss'
import { MealPlan } from '@/features/mealPlans/types'
import { Meal, MainDish, SideDish, SIDE_DISH, MAIN_DISH } from '@/features/meals/types'
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import ConfirmationWindow from './ComfirmationWindow'

const MealPlanList = (props: { mealPlan: MealPlan, date: Date, setListOfMealPlans: Dispatch<SetStateAction<MealPlan[]>>, listOfMealPlans: MealPlan[] }) => {
    const [updateMealPlanMode, setUpdateMealPlanMode] = useState<boolean>(false)
    const [newDate, setNewDate] = useState<Date>(new Date())
    const [listOfMeals, setListOfMeals] = useState<Meal[]>([])
    const [showConfirmationWindow, setShowConfirmationWindow] = useState<Boolean>(false)
    const [mainDish, setMainDish] = useState<Meal>({
        mealName: '',
        category: 'undefined',
        description: ''
    })
    const [sideDish, setSideDish] = useState<Meal>({
        mealName: '',
        category: 'undefined',
        description: ''
    })
    const [mealPlanToUpdate, setMealPlanToUpdate] = useState<MealPlan>({
        description: '',
        meals: [],
        date: ''
    })
    const { mealPlan, date, setListOfMealPlans, listOfMealPlans } = props

    useEffect(() => {
        fetchListOfMeals()
        setMealPlanToUpdate(mealPlan)
        setNewDate(mealPlan.date as Date)

    }, [])


    const fetchListOfMeals = async (): Promise<void> => {
        const response = await fetch('/api/meals')
        if (response.status === 200) {
            const data = await response.json()
            setListOfMeals(data.data)
        }
    }


    const updateMealButton = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        setUpdateMealPlanMode(!updateMealPlanMode)
        console.log(mealPlanToUpdate.meals[0].meal)
    }

    const updateDescriptionField = (event: ChangeEvent<HTMLInputElement>): void => {
        setMealPlanToUpdate(prev => ({
            ...prev, description: event.target.value
        }))
    }

    const handleMainDishChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setMainDish(prev => ({
            ...prev, mealName: event.target.value
        }))
        setMealPlanToUpdate(prev => ({
            ...prev, meals: [mainDish, sideDish]
        }))
    }

    const handleSideDishChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setSideDish(prev => ({
            ...prev, mealName: event.target.value
        }))
        setMealPlanToUpdate(prev => ({
            ...prev, meals: [mainDish, sideDish]
        }))
    }

    const handleUpdateMealButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (mainDish.mealName.length > 0 && sideDish.mealName.length > 0) {
            setMealPlanToUpdate(prev => ({
                ...prev, meals: [mainDish, sideDish]
            }))
            const response = await fetch('/api/mealPlans', {
                method: "POST",
                body: JSON.stringify({
                    id: mealPlanToUpdate.id,
                    description: mealPlanToUpdate.description,
                    meals: [mainDish.mealName, sideDish.mealName],
                    date: newDate
                })
            })
            if (response.status === 200) {
                const data = await response.json()
                console.log(data);
            }
        }
    }

    const handleDeleteButton = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowConfirmationWindow(true)

    }

    const handleConfirmButtonPress = async () => {
        setShowConfirmationWindow(false)
        const response = await fetch('/api/mealPlans?mealPlanId=' + mealPlan.id, {
            method: "DELETE"
        })
        console.log(response)
        if (response.status === 200) {
            const data = await response.json()
            console.log(data)
            const mealPlansWithoutDeletedMealPlan: MealPlan[] = listOfMealPlans.filter(el => el.id !== mealPlan.id)
            setListOfMealPlans(mealPlansWithoutDeletedMealPlan)
        }
    }

    const handleDeclineButtonPress = () => {
        setShowConfirmationWindow(false)
    }

    return (
        <div className="meal-plan">
            {showConfirmationWindow ? <ConfirmationWindow message={"Er du sikker på at du ønsker å slette?"} confirmButton={"Ja"} declineButton={"Nei"} handleConfirmButtonPress={handleConfirmButtonPress} handleDeclineButtonPress={handleDeclineButtonPress} /> : ''}

            <section className="config-meal-box">
                <h3>Middag</h3>
                <button className="config-button" onClick={updateMealButton}>Oppdater</button>
                <button className="config-button" onClick={handleDeleteButton}>Slett</button>
            </section>
            {updateMealPlanMode ?

                <div className="information-meal-box">
                    <label htmlFor="descriptionField">Beskrivelse:</label>
                    <input type="text" value={mealPlanToUpdate?.description} onChange={updateDescriptionField} id="descriptionField" />
                    <p>Dato:</p>
                    <DatePicker className="calendar" selected={newDate} onChange={(date => setNewDate(date as Date))} dateFormat={"dd/MM/YYYY"} />
                    <p>Hovedrett:</p>
                    <select onChange={handleMainDishChange}>
                        <option>Velg hovedrett</option>

                        {listOfMeals.map(meal =>
                            (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                                <option key={meal.mealName} value={meal.mealName}>{meal.mealName}</option>
                                : ''
                        )}
                    </select>

                    <p>Ved siden av:</p>
                    <select onChange={handleSideDishChange}>
                        <option>Velg siderett</option>
                        {listOfMeals.map(meal =>
                            (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                                <option key={meal.mealName} value={meal.mealName}>{meal.mealName}</option>
                                : ''
                        )}
                    </select>
                    <button className="config-button" onClick={handleUpdateMealButton}>Oppdater rett</button>
                </div>
                :
                <div className="meal-desc-container">
                    <section className="description-meal-box">
                        <h4>{mealPlan.description}</h4>
                        <img src={'/media/placeholderfood.webp'} alt='Bilde måltid' className="imageFood"></img>
                        <p>Dato: {mealPlan.date.toString()}</p>
                        {mealPlan.meals.map(el =>
                            (MAIN_DISH as unknown as MainDish[]).includes(el.meal?.category as MainDish) ? <p key={el.meal?.mealName}>Hovedrett: {el.meal?.mealName}</p> : ''
                        )}
                        {mealPlan.meals.map(el =>
                            (SIDE_DISH as unknown as SideDish[]).includes(el.meal?.category as SideDish) ? <p key={el.meal?.mealName}>Ved siden av: {el.meal?.mealName}</p> : ''
                        )}
                    </section>
                </div>
            }
        </div>
    )
}
export default MealPlanList


