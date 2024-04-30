const statisticsManagement = () => {
    return(
        <div className="mainDiv">
                <h1>Statistikk verktøy</h1>
                <h2>NB: Ikke funksjonell i prototype</h2>
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
                                <li>Burger: 115</li>
                                <li>Carbonara: 65</li>
                                <li>Fish and Chips: 43</li>
                                <li>Lutefisk: 11</li>
                                <li>Pizza: 221</li>
                                <li>Smalahove: 5</li>
                                <li>Tacos: 164</li>
                                <li>Vegetarisk curry: 23</li>
                            </ul>
                        </section>

                        <section>
                            <img src="/media/graf.png" className="graphImg"></img>
                        </section>
                        <section className="graphs-container">
                            <article className="border total-orders-stats">
                                <h3>Totale bestillinger</h3>
                                <span>643</span>
                            </article>
                            <article className="border popular-stats">
                                <h3>Mest populære bestillinger</h3>
                                <ul>
                                    <li>Pizza: 221 bestillinger</li>
                                    <li>Tacos: 164 bestillinger</li>
                                    <li>Burger: 115 bestillinger</li>
                                </ul>
                            </article>
                            <article className="border least-popular-stats">
                                <h3>Minst populære bestillinger</h3>
                                <ul>
                                    <li>Vegetarisk Curry: 23 bestillinger</li>
                                    <li>Lutefisk: 11 bestillinger</li>
                                    <li>Smalahove: 5 bestillinger</li>
                                </ul>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
    )
}
export default statisticsManagement