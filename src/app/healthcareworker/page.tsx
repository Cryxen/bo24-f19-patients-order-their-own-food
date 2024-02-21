import '../styles/healthcareworkerpage.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function Healthcareworker() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Velkommen Sarah</h1>
                <button>Mat bestilling</button>
                <button>Liste med bestillinger</button>
                <button>Eventuelle knapper</button>
                <button>Eventuelle knapper..</button>
            </div>
        </Layout>
    )
}