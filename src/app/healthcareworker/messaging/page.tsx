import '../../styles/globals.scss'
import '../../styles/messagehealthcare.scss'
import Layout from '../../components/layout'

export default function messagingHealthcare() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Meldingsmodul</h1>
                <section className='mainSection'>

                    <article className='messageMain'>
                        <form>
                            <input type="text" placeholder='Tittel' className='titleInput'></input>
                            <input type="text" placeholder='Romnr' className='titleInput'></input>
                            <textarea name="message" id='message' placeholder='Meldingstekst' className='messageInput'></textarea>
                        </form>
                        <button className='submitButton'>Send melding til kjøkken</button>
                    </article>

                </section>
            </div>
        </Layout>
    )
}