import Layout from "@/app/components/layout"
import '../../styles/mealplanning.scss'

const Mealplanning = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Måltid Planlegging</h1>
                <section>
                    <span>Kostholdsplan for:</span>
                    <select>
                        <option>Kalender</option>
                        <option>Dato 1</option>
                        <option>Dato 2</option>
                        <option>Dato 3</option>
                        <option>Dato 4</option>
                    </select>
                    <span className="arrow">&#8594;</span>
                </section>
                <div className="container">
                    <article className="meal-plan">
                        <section>
                            <span>Frokost</span>
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
                    <article>
                        <section className="graph">
                            <span>Ernæringsgraf</span>
                        </section>
                        <section className="overview">
                            <span>Ernæringsoversikt</span>
                        </section>
                    </article>  
                </div>
                <section className="buttons">
                    <button>Ny måltid</button>
                    <button>Fjern måltid</button>
                </section>
            </div>  
        </Layout>
    )
}
export default Mealplanning