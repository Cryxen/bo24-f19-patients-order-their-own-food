import Layout from '@/app/components/layout'
import Rolledrop from '../../components/Rolledrop';
import '../../styles/useradministration.scss'
import '../../styles/globals.scss'



const useradministration = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Brukeradministrasjon</h1>
            <div className='mainbox'>
                <article className='itembox'>
                    <section className='contentitembox'><p>BRUKER</p></section>
                    <section className='contentitemboxrolle'><Rolledrop/></section>
                </article>

                <article className='itembox'>
                    <section className='contentitembox'><p>BRUKER</p></section>
                    <section className='contentitemboxrolle'><Rolledrop/></section>
                </article>

                <article className='itembox'>
                    <section className='contentitembox'><p>BRUKER</p></section>
                    <section className='contentitemboxrolle'><Rolledrop/></section>
                </article>

                <article className='centerbox'>
                    <button className='generatebutton'>Oppdater</button>
                </article>

            </div>

            <div className='mainbox'>
            <article className='itembox2'>
                    <section className='contentitemboxrolle'><input type='text' placeholder='Brukernavn' className='inputbruker'></input></section>
                    <section className='contentitemboxrolle'><input type='text' placeholder='Passord' className='inputbruker'></input></section>
                </article>

                <article className='centerbox'>
                    <section className='contentitemboxrolle'><Rolledrop/></section>
                </article>

                <article className='centerbox'>
                    <button className='generatebutton'>Opprett profil</button>
                </article>
            </div>

        </div>
        </Layout>
    )
}
export default useradministration