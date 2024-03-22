import Layout from "@/app/components/layout"
import '../../styles/statisticsmanagement.scss'

const Statisticsmanagement = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Statistikk verktøy</h1>
                <div className="main-wrapper">
                    <div className="filter-container">
                        <select className="date-filter">
                            <option>I dag</option>
                            <option>Denne uken</option>
                            <option>Denne måneden</option>
                            <option>Dette året</option>
                        </select>
                        <select className="date-filter calendar">
                            <option>Dato filter</option>
                            <option>Dato</option>
                            <option>Dato</option>
                            <option>Dato</option>
                        </select>
                        <button className="update-button">Oppdater</button>
                    </div>
                    <div className="stats-container">
                        <section className="border meal-list-container">
                            <h5>Måltider og antall bestillinger</h5>
                            <ul className="meal-list">
                                <li>Måltid 1</li>
                                <li>Måltid 2</li>
                                <li>Måltid 3</li>
                                <li>Måltid 4</li>
                                <li>Måltid 5</li>
                                <li>Måltid 6</li>
                                <li>Måltid 7</li>
                                <li>Måltid 8</li>
                            </ul>
                        </section>
                        <section className="graphs-container">
                            <article className="border total-orders-stats">
                                <h3>Totale bestillinger</h3>
                                <span>223</span>
                            </article>
                            <article className="border popular-stats">
                                <h3>Mest populære bestillinger</h3>
                                <ul>
                                    <li>Måltid 1</li>
                                    <li>Måltid 2</li>
                                    <li>Måltid 3</li>
                                </ul>
                            </article>
                            <article className="border least-popular-stats">
                                <h3>Minst populære bestillinger</h3>
                                <ul>
                                    <li>Måltid 1</li>
                                    <li>Måltid 2</li>
                                    <li>Måltid 3</li>
                                </ul>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Statisticsmanagement