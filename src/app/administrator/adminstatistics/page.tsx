import Layout from "@/app/components/layout"
import '../../styles/statisticsmanagement.scss'

const Statisticsmanagement = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Statistikk verktøy</h1>
                <section className="section-filter">
                    <select className="date-filter">
                        <option>I dag</option>
                        <option>Denne uken</option>
                        <option>Denne måneden</option>
                        <option>Dette året</option>
                    </select>
                    <select className="date-filter">
                        <option>Dato filter</option>
                        <option>Dato</option>
                        <option>Dato</option>
                        <option>Dato</option>
                    </select>
                    <button className="update-button">Oppdater</button>
                </section>
                <div className="stats-container">
                    <article className="border meal-list-container">
                        <h5>Måltider og antall bestillinger</h5>
                        <ul className="meal-list">
                            <li>Måltid 1</li>
                            <li>Måltid 2</li>
                            <li>Måltid 3</li>
                            <li>Måltid 4</li>
                            <li>Måltid 5</li>
                        </ul>
                    </article>
                    <article className="graphs-container">
                        <section className="border total-orders-section">
                            <h3>Totale bestillinger</h3>
                            <span>223</span>
                        </section>
                        <section className="border popular-section">
                            <h3>Mest populære bestillinger</h3>
                            <ul>
                                <li>Måltid 1</li>
                                <li>Måltid 2</li>
                                <li>Måltid 3</li>
                            </ul>
                        </section>
                        <section className="border least-popular-section">
                            <h3>Minst populære bestillinger</h3>
                            <ul>
                                <li>Måltid 1</li>
                                <li>Måltid 2</li>
                                <li>Måltid 3</li>
                            </ul>
                        </section>
                    </article>
                </div>
                <section>
                </section>
            </div>
        </Layout>
    )
}

export default Statisticsmanagement