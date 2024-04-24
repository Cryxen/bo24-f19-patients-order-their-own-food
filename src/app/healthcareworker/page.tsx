import '../styles/healthcareworkerpage.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'

export default function Healthcareworker() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Velkommen Sarah</h1>
                <div className='dashboardwrap'>
                    <Navbox redirect='healthcareworker/foodorders' text='Matbestilling'/>
                    <Navbox redirect='healthcareworker/orderlist' text='Ordreliste'/>
                    <Navbox redirect='healthcareworker/messaging' text='Melding til kjøkken'/>
                </div>
            </div>
        </Layout>
    )
}