import Layout from "@/app/components/layout"
import '../../styles/foodorder.scss'

const Foodorders = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Dagens meny:</h1>
                <div className="room-container">
                    <label htmlFor="room-list">Rom: </label>
                    <select className="room-list">
                        <option>Rom 1</option>
                        <option>Rom 2</option>
                        <option>Rom 3</option>
                        <option>Rom 4</option>
                        <option>Rom 5</option>
                    </select>
                </div>

                <div><p>Diett info:</p></div>

                <div className="order-container">
                    <table className="order-table">
                        <tbody>
                        <tr>
                            <td className="display-table">Bilde av mat 1</td>
                            <td className="display-table">Beskrivelse av mat 1</td>
                            <td className="order-config">
                                <select className="portion-list">
                                    <option>Porsjon</option>
                                    <option>Liten</option>
                                    <option>Medium</option>
                                    <option>Stor</option>
                                </select>
                                <button className="portion select-button">Små</button>
                                <button className="portion select-button">Medium</button>
                                <button className="portion select-button">Stor</button>
                                <button className="select-button">Bestill</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-container">
                    <table className="order-table">
                        <tbody>
                        <tr>
                            <td className="display-table">Bilde av mat 2</td>
                            <td className="display-table">Beskrivelse av mat 2</td>
                            <td className="order-config">
                                <select className="portion-list">
                                    <option>Porsjon</option>
                                    <option>Liten</option>
                                    <option>Medium</option>
                                    <option>Stor</option>
                                </select>
                                <button className="portion select-button">Små</button>
                                <button className="portion select-button">Medium</button>
                                <button className="portion select-button">Stor</button>
                                <button className="select-button">Bestill</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-container">
                    <table className="order-table">
                        <tbody>
                        <tr>
                            <td className="display-table">Bilde av mat 3</td>
                            <td className="display-table">Beskrivelse av mat 3</td>
                            <td className="order-config">
                                <select className="portion-list">
                                    <option>Porsjon</option>
                                    <option>Liten</option>
                                    <option>Medium</option>
                                    <option>Stor</option>
                                </select>
                                <button className="portion select-button">Små</button>
                                <button className="portion select-button">Medium</button>
                                <button className="portion select-button">Stor</button>
                                <button className="select-button">Bestill</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="red order-container">
                    <table className="order-table">
                        <tbody>
                        <tr>
                            <td className="display-table">Bilde av mat 4</td>
                            <td className="display-table">Beskrivelse av mat 4</td>
                            <td className="order-config">
                                <select className="portion-list">
                                    <option>Porsjon</option>
                                    <option>Liten</option>
                                    <option>Medium</option>
                                    <option>Stor</option>
                                </select>
                                <button className="portion select-button">Små</button>
                                <button className="portion select-button">Medium</button>
                                <button className="portion select-button">Stor</button>
                                <button className="select-button">Bestill</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>
    )
}
export default Foodorders