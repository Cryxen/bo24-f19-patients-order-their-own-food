import '../styles/developer.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'

export default function DevDash() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Developer Dashboard</h1>
                <div className='dashboardwrap'>
                    <section className="dashboard-role-container">
                        <h2>Admin</h2>
                        <div className="dashboard-container">
                            <Navbox redirect='../administrator' text='Dashboard Admin (Må refreshe)'/>
                            <Navbox redirect='../administrator/budget' text='Budsjett'/>
                            <Navbox redirect='../administrator/adminstatistics' text='Statistikk'/>
                            <Navbox redirect='../administrator/pasientadministrasjon' text='Pasient-Administrasjon'/>
                            <Navbox redirect='../administrator/useradministration' text='Bruker-Administrasjon'/>
                        </div>
                    </section>
                    
                    <section className="dashboard-role-container">
                        <h2>Healthcare</h2>
                        <div className="dashboard-container">
                            <Navbox redirect='../healthcareworker' text='Dashboard Helsefagarbeider (Må refreshe)'/>
                            <Navbox redirect='../healthcareworker/foodorders' text='Matbestilling'/>
                            <Navbox redirect='../healthcareworker/orderlist' text='Ordreliste'/>
                            <Navbox redirect='../healthcareworker/messaging' text='Melding til kjøkken'/>
                        </div>
                    </section>
                    
                    <section className="dashboard-role-container">
                        <h2>Kitchen</h2>
                        <div className="dashboard-container">
                            <Navbox redirect='../kitchenstaff' text='Dashboard Kjøkken (Må refreshe)'/>
                            <Navbox redirect='../kitchenstaff/mealplanning' text='Måltid planlegging'/>
                            <Navbox redirect='../kitchenstaff/foodmanagement' text='Mat håndtering'/>
                            <Navbox redirect='../kitchenstaff/staffstatistics' text='Statistikk verktøy'/>
                            <Navbox redirect='../kitchenstaff/recievemessage' text='Meldinger'/>
                            <Navbox redirect='../kitchenstaff/dietaryinfo' text='Diettinformasjon'/>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}