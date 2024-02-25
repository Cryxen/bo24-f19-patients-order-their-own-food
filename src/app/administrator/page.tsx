import '../styles/administrator.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function Administrator() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Velkommen!</h1>
                <section className='dashboardwrap'>
                <button>Budsjett Verktøy</button>
                <button>Statistikk Verktøy</button>
                <button>Brukeradministrasjon</button>
                <button>Pasientinformasjon</button>
                <button>Eventuelle knapper</button>
                <button>Eventuelle knapper..</button>
                </section>
            </div>
        </Layout>
    )
}