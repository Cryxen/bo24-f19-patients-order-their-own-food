import Layout from "@/app/components/layout"
import '../../styles/foodorder.scss'

const Foodorders = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Dagens meny:</h1>
                <div className="main-wrapper">
                    <div className="room-container">
                        <label htmlFor="room-list">Rom: </label>
                        <select className="room dropdown">
                            <option className="room-option">Rom 1</option>
                            <option className="room-option">Rom 2</option>
                            <option className="room-option">Rom 3</option>
                            <option className="room-option">Rom 4</option>
                            <option className="room-option">Rom 5</option>
                        </select>
                    </div>
                    <div className="diet container">
                        <p className="diet-info">Diett info:</p>
                    </div>
                    <div className="order-container">
                        <table className="order-table">
                            <tbody>
                            <tr>
                                <td className="display-table">Bilde av mat 1</td>
                                <td className="display-table">Beskrivelse av mat 1</td>
                                <td className="order-config">
                                    <select className="portion dropdown">
                                        <option className="portion-option">Porsjon</option>
                                        <option className="portion-option">Liten</option>
                                        <option className="portion-option">Medium</option>
                                        <option className="portion-option">Stor</option>
                                    </select>
                                    <button className="portions select-button">Små</button>
                                    <button className="portions select-button">Medium</button>
                                    <button className="portions select-button">Stor</button>
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
                                    <select className="portion dropdown">
                                        <option className="portion-option">Porsjon</option>
                                        <option className="portion-option">Liten</option>
                                        <option className="portion-option">Medium</option>
                                        <option className="portion-option">Stor</option>
                                    </select>
                                    <button className="portions select-button">Små</button>
                                    <button className="portions select-button">Medium</button>
                                    <button className="portions select-button">Stor</button>
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
                                    <select className="portion dropdown">
                                        <option className="portion-option">Porsjon</option>
                                        <option className="portion-option">Liten</option>
                                        <option className="portion-option">Medium</option>
                                        <option className="portion-option">Stor</option>
                                    </select>
                                    <button className="portions select-button">Små</button>
                                    <button className="portions select-button">Medium</button>
                                    <button className="portions select-button">Stor</button>
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
                                    <select className="portion dropdown">
                                        <option className="portion-option">Porsjon</option>
                                        <option className="portion-option">Liten</option>
                                        <option className="portion-option">Medium</option>
                                        <option className="portion-option">Stor</option>
                                    </select>
                                    <button className="portions select-button">Små</button>
                                    <button className="portions select-button">Medium</button>
                                    <button className="portions select-button">Stor</button>
                                    <button className="select-button">Bestill</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Foodorders