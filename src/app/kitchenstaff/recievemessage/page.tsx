import '../../styles/recievemessagekitchen.scss'
import Layout from '../../components/layout'
import RecievedMSG from '@/app/components/recievedMSG'


export default function recievemessage() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Kjøkken</h1>
                <section className='mainBody'>

                <RecievedMSG />
                
                </section>
            </div>
        </Layout>
    )
}