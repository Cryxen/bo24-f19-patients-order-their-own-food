import '../styles/kitchenstaff.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function Kitchenstaff() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Kjøkken</h1>
                <section className='dashboardwrap'>
                <button>Måltid planlegging</button>
                <button>Mat håndtering</button>
                <button>Statistikk verktøy</button>
                <button>Eventuelle knapper</button>
                <button>Eventuelle knapper</button>
                <button>Eventuelle knapper..</button>
                </section>
            </div>
        </Layout>
    )
}