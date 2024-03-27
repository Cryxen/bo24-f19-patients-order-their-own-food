import '@/app/styles/mealplanning.scss'
import { MealPlan } from '@/features/mealPlans/types'
import { Meal, MainDish, SideDish, SIDE_DISH, MAIN_DISH } from '@/features/meals/types'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

const MealPlanList = (props: { mealPlan: MealPlan }) => {
    const [updateMealPlanMode, setUpdateMealPlanMode] = useState<boolean>(false)
    const [listOfMeals, setListOfMeals] = useState<Meal[]>([])
    const [mealPlanToUpdate, setMealPlanToUpdate] = useState<MealPlan>({
        description: '',
        meals: [],
        date: ''
    })
    const { mealPlan } = props

    useEffect(() => {
        setMealPlanToUpdate(mealPlan)
    }, [])

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

    const handleMainDishChange = () => {

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
                    <input type='text' value={mealPlanToUpdate?.description} onChange={updateDescriptionField} id='descriptionField'/>
                    <p>Hovedrett: </p>
                    {mealPlanToUpdate.meals?.map(meal =>
                        (MAIN_DISH as unknown as MainDish[]).includes(meal.meal.category as MainDish) ?
                            <div key={meal.meal.mealName as string}>
                                <label htmlFor={meal.meal.mealName as string}>{meal.meal.mealName as string}</label>
                                <input type="radio" id={meal.meal.mealName as string} value={meal.meal.mealName as string} name="mainDish" onClick={handleMainDishChange} />
                            </div> : '' )}
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


