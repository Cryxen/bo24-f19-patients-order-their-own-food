import '../styles/globals.scss'
import '../styles/healthcareworkerpage.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'

export default function Healthcareworker() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Velkommen Sarah</h1>
                <section className='dashboardwrap'>
                <Navbox redirect='healthcareworker/foodorders' text='Matbestilling'/>
                <Navbox redirect='healthcareworker/orderlist' text='Ordreliste'/>
                </section>
            </div>
        </Layout>
    )
}