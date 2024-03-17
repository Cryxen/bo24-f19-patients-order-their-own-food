import Layout from '@/app/components/layout'
import '../../styles/orderlist.scss'

const Orderlist = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Bestillinger</h1>
            <section>
                <div className="container"><h3 className="room">Room 1</h3></div>
                <div className="dish-view container">
                    <p className="dish">Rett 1 - liten</p>
                    <p className="dish">Rett 2</p>
                    <p className="dish">Rett 3</p>
                </div>
                <div className="select container">
                    <button className="select-button">Endre bestilling</button>
                    <button className="select-button">Merk levert</button>
                </div>
            </section>

            <section>
                <div className="container"><h3 className="room">Room 2</h3></div>
                <div className="dish-view container">
                    <p className="dish">Rett 1 - liten</p>
                    <p className="dish">Rett 2</p>
                    <p className="dish">Rett 3</p>
                </div>
                <div className="select container">
                    <button className="select-button">Endre bestilling</button>
                    <button className="select-button">Merk levert</button>
                </div>
            </section>

            <section>
                <div className="container"><h3 className="room">Room 3</h3></div>
                <div className="dish-view container">
                    <p className="dish">Rett 1 - liten</p>
                    <p className="dish">Rett 2</p>
                    <p className="dish">Rett 3</p>
                    <p className='dish'>Rett 4</p>
                    <p className='dish'>Rett 5 - liten</p>
                </div>
                <div className="select container">
                    <button className="select-button">Endre bestilling</button>
                    <button className="select-button">Merk levert</button>
                </div>
            </section>

            <section>
                <div className="container"><h3 className="room">Room X</h3></div>
                <div className="dish-view container">
                    <p className="dish">Rett 1 - liten</p>
                    <p className="dish">Rett 2</p>
                    <p className="dish">Rett 3</p>
                </div>
                <div className="select container">
                    <button className="select-button">Endre bestilling</button>
                    <button className="select-button">Merk levert</button>
                </div>
            </section>
        </div>
        </Layout>
    )
}
export default Orderlist