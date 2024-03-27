import '@/app/styles/mealplanning.scss'
import { MealPlan } from '@/features/mealPlans/types'
import { Meal, MainDish, SideDish, SIDE_DISH, MAIN_DISH } from '@/features/meals/types'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

const MealPlanList = (props: { mealPlan: MealPlan }) => {
    const [updateMealPlanMode, setUpdateMealPlanMode] = useState<boolean>(false)
    const [listOfMeals, setListOfMeals] = useState<Meal[]>([])
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
    const { mealPlan } = props

    useEffect(() => {
        fetchListOfMeals()
        setMealPlanToUpdate(mealPlan)

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

    const handleMainDishChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMainDish(prev => ({
            ...prev, mealName: event.target.value
        }))
        setMealPlanToUpdate(prev => ({
            ...prev, meals: [mainDish, sideDish]
        }))
    }

    const handleSideDishChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            const response = await fetch('/api/mealPlans', {
                method: "POST",
                body: JSON.stringify(mealPlanToUpdate)
            })
            console.log(response)
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
            }
        }
    }

    return (
        <article className="meal-plan">
            <section>
                <span>Middag</span>
                <button onClick={updateMealButton}>Oppdater</button>
            </section>
            {updateMealPlanMode ?
                <section className='information'>
                    <label htmlFor='descriptionField'>Beskrivelse:</label>
                    <input type='text' value={mealPlanToUpdate?.description} onChange={updateDescriptionField} id='descriptionField' />
                    <p>Hovedrett: </p>
                    {listOfMeals.map(meal =>
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.category as MainDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type='radio' value={meal.mealName} name='mainDish' id={meal.mealName} onChange={handleMainDishChange} />
                            </div>
                            : ''
                    )}
                    <p>Ved side nav:</p>
                    {listOfMeals.map(meal =>
                        (SIDE_DISH as unknown as SideDish[]).includes(meal.category as SideDish) ?
                            <div key={meal.mealName}>
                                <label htmlFor={meal.mealName}>{meal.mealName}</label>
                                <input type='radio' value={meal.mealName} name='sideDish' id={meal.mealName} onChange={handleSideDishChange} />
                            </div>
                            : ''
                    )}
                    <button onClick={handleUpdateMealButton}>Oppdater rett</button>
                </section>
                :
                <section className="information">
                    <h4>{mealPlan.description}</h4>
                    <p>Bilde</p>
                    {mealPlan.meals.map(el =>
                        (MAIN_DISH as unknown as MainDish[]).includes(el.meal.category as MainDish) ? <p key={el.meal.mealName}>Hovedrett: {el.meal.mealName}</p> : ''
                    )}
                    {mealPlan.meals.map(el =>
                        (SIDE_DISH as unknown as SideDish[]).includes(el.meal.category as SideDish) ? <p key={el.meal.mealName}>Ved siden av: {el.meal.mealName}</p> : ''
                    )}
                </section>
            }
            <div className='break'></div>
            <span className="arrow">&#8594;</span>
        </article>
    )
}
export default MealPlanList


