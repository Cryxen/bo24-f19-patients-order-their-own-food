import Layout from "@/app/components/layout"
import '../../styles/foodorder.scss'
const Foodorders = () => {

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Dagens meny:</h1>
                <label htmlFor="room-list">Rom:</label>
                <select name="Room-list">
                    <option>Rom 1</option>
                    <option>Rom 2</option>
                    <option>Rom 3</option>
                    <option>Rom 4</option>
                    <option>Rom 5</option>
                </select>

                <section>
                    <p>Diett info:</p>
                </section>

                <section>
                    <table>
                        <tbody>
                        <tr>
                            <td>Bilde av mat 1</td><td>Beskrivelse av mat 1</td><td><button>Bestill</button></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <table>
                        <tbody>
                        <tr>
                            <td>Bilde av mat 2</td><td>Beskrivelse av mat 2</td><td><button>Bestill</button></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <table>
                        <tbody>
                        <tr>
                            <td>Bilde av mat 3</td><td>Beskrivelse av mat 3</td><td><button>Bestill</button></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section className="red">
                    <table>
                        <tbody>
                        <tr>
                            <td>Bilde av mat 4</td><td>Beskrivelse av mat 4</td><td><button>Bestill</button></td>
                        </tr>
                        </tbody>
                    </table>
                </section>

            </div>
        </Layout>
    )

}
export default Foodorders