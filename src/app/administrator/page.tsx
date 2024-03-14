import '../styles/kitchenstaff.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'


export default function Administrator() {

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Administrator</h1>
                <section className='dashboardwrap'>
                    <Navbox redirect='administrator/budget' text='Budsjett'/>
                    <Navbox redirect='administrator/adminstatistics' text='Statistikk'/>
                    <Navbox redirect='administrator/pasientadministrasjon' text='Pasientadministrasjon'/>
                    <Navbox redirect='administrator/useradministration' text='Brukeradministrasjon'/>
                </section>
            </div>
        </Layout>
    )
}