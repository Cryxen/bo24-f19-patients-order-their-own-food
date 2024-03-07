import Layout from "@/app/components/layout"
import '../../styles/statisticsmanagement.scss'

const Statisticsmanagement = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Statistikk verktæy</h1>
                <section>
                    <select>
                        <option>I dag</option>
                        <option>Denne uken</option>
                        <option>Denne måneden</option>
                        <option>Dette året</option>
                    </select>
                    <select>
                        <option>Dato filter</option>
                        <option>Dato</option>
                        <option>Dato</option>
                        <option>Dato</option>
                    </select>
                    <button>Oppdater</button>
                </section>
                <div className="container">
                    <article className="meal-list">
                        <section>
                            <h5>Måltider og antall bestillinger</h5>
                            <ul className="list">
                                <li>Måltid 1</li>
                                <li>Måltid 2</li>
                                <li>Måltid 3</li>
                                <li>Måltid 4</li>
                                <li>Måltid 5</li>
                            </ul>
                        </section>
                    </article>
                    <article className="graphs">
                        <section>
                            <h3>Totale bestillinger</h3>
                            <span>223</span>
                        </section>
                        <section>
                            <h3>Mest populære bestillinger</h3>
                            <ul>
                                <li>Måltid 1</li>
                                <li>Måltid 2</li>
                                <li>Måltid 3</li>
                            </ul>
                        </section>
                        <section>
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
                    <button>Print ut statistikk</button>
                </section>
            </div>
        </Layout>
    )
}

export default Statisticsmanagement