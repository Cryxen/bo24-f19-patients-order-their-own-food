import '../styles/kitchenstaff.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function Kitchenstaff() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Administrator</h1>
                <section className='dashboardwrap'>
                <button>Budsjett</button>
                <button>Statistikk</button>
                <button>Brukeradministrasjon</button>
                <button>Pasientadministrasjon</button>
                </section>
            </div>
        </Layout>
    )
}