import Layout from '@/app/components/layout'
import '../../styles/budget.scss'

const Budget = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Budsjett</h1>
            <div className='mainbox'>
                <article className='itembox'>
                    <section className='contentitembox'><p>ITEM NAME</p></section>
                    <section className='contentitembox'><p>ITEM PRICE</p></section>
                </article>

                <article className='itembox'>
                    <section className='contentitembox'><p>ITEM NAME</p></section>
                    <section className='contentitembox'><p>ITEM PRICE</p></section>
                </article>

                <article className='itembox'>
                    <section className='contentitembox'><p>ITEM NAME</p></section>
                    <section className='contentitembox'><p>ITEM PRICE</p></section>
                </article>

                <article className='centerbox'>
                    <button className='generatebutton'>GENERER RAPPORT</button>
                </article>
            </div>
        </div>
        </Layout>
    )
}
export default Budget