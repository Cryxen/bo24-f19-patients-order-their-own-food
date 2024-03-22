import Layout from '@/app/components/layout'
import '../../styles/budget.scss'

const Budget = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Budsjett</h1>
            <form className="main-wrapper">
                <div className="item-container">
                    <div className="item-box">
                        <label htmlFor="item1">Mat:</label>
                        <input type="text" id="item1" className="item" placeholder="Tast inn mat..."/>
                    </div>
                    <div className="item-box">
                        <label htmlFor="price1">Pris:</label>
                        <input type="number" id="price1" className="price" placeholder="Tast inn pris..."/>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item-box">
                        <label htmlFor="item2">Mat:</label>
                        <input type="text" id="item2" className="item" placeholder="Tast inn mat..."/>
                    </div>
                    <div className="item-box">
                        <label htmlFor="price2">Pris:</label>
                        <input type="number" id="price2" className="price" placeholder="Tast inn pris..."/>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item-box">
                        <label htmlFor="item3">Mat:</label>
                        <input type="text" id="item3" className="item" placeholder="Tast inn mat..."/>
                    </div>
                    <div className="item-box">
                        <label htmlFor="price3">Pris:</label>
                        <input type="number" id="price3" className="price" placeholder="Tast inn pris..."/>
                    </div>
                </div>  
                <button className="new-item button">+ Ny mat</button>
                <input type="submit" className="submit button" value="Generer Rapport"/>
            </form>
        </div>
        </Layout>
    )
}
export default Budget