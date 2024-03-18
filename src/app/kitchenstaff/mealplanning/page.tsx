import Layout from "@/app/components/layout"
import '../../styles/mealplanning.scss'

const Mealplanning = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Måltid Planlegging</h1>
                <form className="date-container">
                    <label htmlFor="date">Måltid for: [Dato]</label>
                    <input type="datetime-local" className="calendar"/> 
                </form>
                <div className="main-wrapper">
                    <div className="meal-plan-container">
                        <section className="meal-plan">
                            <div className="meal-box-1">
                                <h3>Måltid 1</h3>
                                <button className="config-button update">Oppdater</button>
                                <button className="config-button">Rediger</button>
                                <button className="config-button">Dupliser</button>
                            </div>
                            <div className="meal-box-2">
                                <div className="meal">
                                    <p>Bilde</p>
                                    <p>Beskrivelse</p>
                                    <p>Andre info</p>
                                </div>
                                <div className="meal">
                                    <p>Bilde</p>
                                    <p>Beskrivelse</p>
                                    <p>Andre info</p>
                                </div>
                            </div>
                            <div className="meal-box-3">
                                <button className="config-button">Ny matrett</button>
                                <button className="config-button">Se på måltid</button>
                            </div>
                        </section>
                        <section className="meal-plan">
                            <div className="meal-box-1">
                                <h3>Måltid 2</h3>
                                <button className="config-button update">Oppdater</button>
                                <button className="config-button">Rediger</button>
                                <button className="config-button">Dupliser</button>
                            </div>
                            <div className="meal-box-2">
                                <div className="meal">
                                    <p>Bilde</p>
                                    <p>Beskrivelse</p>
                                    <p>Andre info</p>
                                </div>
                                <div className="meal">
                                    <p>Bilde</p>
                                    <p>Beskrivelse</p>
                                    <p>Andre info</p>
                                </div>
                            </div>
                            <div className="meal-box-3">
                                <button className="config-button">Ny matrett</button>
                                <button className="config-button">Se på måltid</button>
                            </div>
                        </section>
                    </div>
                    <div className="meal-overview-container">
                        <section className="meal-graph">
                        </section>
                        <section className="meal-nutrition">
                        </section>
                    </div>
                </div>
                <div className="config-container">
                    <button className="config-button">Ny måltid</button>
                    <button className="config-button">Fjern måltid</button>
                    <button className="config-button">Skriv ut</button>
                </div>
            </div>  
        </Layout>
    )
}
export default Mealplanning