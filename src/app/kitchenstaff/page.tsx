import '../styles/kitchenstaff.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'

export default function Kitchenstaff() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Kjøkken</h1>
                <section className='dashboardwrap'>
                <Navbox redirect='kitchenstaff/mealplanning' text='Måltid planlegging'/>
                <Navbox redirect='kitchenstaff/foodmanagement' text='Mat håndtering'/>
                <Navbox redirect='kitchenstaff/staffstatistics' text='Statistikk verktøy'/>
                </section>
            </div>
        </Layout>
    )
}