import '@/app/styles/mealplanning.scss'

const MealPlanList = () => {

    return (
        <article className="meal-plan">
            <section>
                <span>Middag</span>
                <button>Oppdater</button>
                <button>Rediger</button>
                <button>Dupliser</button>
            </section>
            <section className="information">
                <span>Bilde</span>
                <span>Beskrivelse</span>
                <span className="arrow">&#8594;</span>
            </section>
            <section>
                <button>Legg til ny matrett</button>
                <button>Se på matrett</button>
            </section>
        </article>
    )

}
export default MealPlanList