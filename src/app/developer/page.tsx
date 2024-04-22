import '../styles/kitchenstaff.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'

export default function DevDash() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Developer Dashboard</h1>
                <section className='dashboardwrap'>

                <div>
                <h2>Admin</h2>
                <Navbox redirect='../administrator/budget' text='Budsjett'/>
                <Navbox redirect='../administrator/adminstatistics' text='Statistikk'/>
                <Navbox redirect='../administrator/pasientadministrasjon' text='Pasientadministrasjon'/>
                <Navbox redirect='../administrator/useradministration' text='Brukeradministrasjon'/>
                </div>

                <div>
                <h2>Healthcare</h2>
                <Navbox redirect='../healthcareworker/foodorders' text='Matbestilling'/>
                <Navbox redirect='../healthcareworker/orderlist' text='Ordreliste'/>
                <Navbox redirect='../healthcareworker/messaging' text='Melding til kjøkken'/>
                </div>

                <div>
                <h2>Kitchen</h2>
                <Navbox redirect='../kitchenstaff/mealplanning' text='Måltid planlegging'/>
                <Navbox redirect='../kitchenstaff/foodmanagement' text='Mat håndtering'/>
                <Navbox redirect='../kitchenstaff/staffstatistics' text='Statistikk verktøy'/>
                <Navbox redirect='../kitchenstaff/recievemessage' text='Meldinger'/>
                <Navbox redirect='../kitchenstaff/dietaryinfo' text='Diettinformasjon'/>
                </div>

                </section>
            </div>
        </Layout>
    )
}