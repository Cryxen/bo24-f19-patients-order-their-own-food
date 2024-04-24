import '../styles/administrator.scss'
import Layout from '../components/layout'
import Navbox from '../components/Navbox'


export default function Administrator() {

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Administrator</h1>
                <div className='dashboardwrap'>
                    <Navbox redirect='administrator/budget' text='Budsjett'/>
                    <Navbox redirect='administrator/adminstatistics' text='Statistikk'/>
                    <Navbox redirect='administrator/pasientadministrasjon' text='Pasient-Administrasjon'/>
                    <Navbox redirect='administrator/useradministration' text='Bruker-Administrasjon'/>
                </div>
            </div>
        </Layout>
    )
}