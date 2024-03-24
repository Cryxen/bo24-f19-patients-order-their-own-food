import '@/app/styles/mealplanning.scss'
import { MealPlan } from '@/features/mealPlans/types'
import { Meal, MainDish, SideDish, SIDE_DISH, MAIN_DISH } from '@/features/meals/types'

const MealPlanList = (props: { mealPlan: MealPlan }) => {
    const { mealPlan } = props
    return (
        <article className="meal-plan">
            <section>
                <span>Middag</span>
                <button>Oppdater</button>
                <button>Rediger</button>
                <button>Dupliser</button>
            </section>
            <section className="information">
                <h4>{mealPlan.description}</h4>
                <p>Bilde</p>
                {mealPlan.meals.map(el =>
                    (MAIN_DISH as unknown as MainDish[]).includes(el.meal.category as MainDish) ? <p>Hovedrett: {el.meal.mealName}</p> : ''
                )}
                {mealPlan.meals.map(el =>
                    (SIDE_DISH as unknown as SideDish[]).includes(el.meal.category as SideDish) ? <p>Ved siden av: {el.meal.mealName}</p> : ''
                )}
            </section>
            <div className='break'></div>
            <span className="arrow">&#8594;</span>
        </article>
    )
}
export default MealPlanList


