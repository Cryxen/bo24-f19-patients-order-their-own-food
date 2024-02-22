import Layout from '@/app/components/layout'
import '../../styles/orderlist.scss'

const Orderlist = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Bestillinger</h1>
            <article>
                <section><p className='room'>Room 1</p></section>
                <section className='dishSection'>
                <p className='dish'>Rett 1 - liten</p>
                <p className='dish'>Rett 2</p>
                <p className='dish'>Rett 3</p>
                </section>
                <section>
                    <button>Endre bestilling</button>
                    <button>Merk levert</button>
                </section>
            </article>
            <article>
                <section><p className='room'>Room 2</p></section>
                <section className='dishSection'>
                <p className='dish'>Rett 1 - liten</p>
                <p className='dish'>Rett 2</p>
                <p className='dish'>Rett 3</p>
                </section>
                <section>
                    <button>Endre bestilling</button>
                    <button>Merk levert</button>
                </section>
            </article>
            <article>
                <section><p className='room'>Room 3</p></section>
                <section className='dishSection'>
                <p className='dish'>Rett 1 - liten</p>
                <p className='dish'>Rett 2</p>
                <p className='dish'>Rett 3</p>
                <p className='dish'>Rett 4</p>
                <p className='dish'>Rett 5 - liten</p>
                </section>
                <section>
                    <button>Endre bestilling</button>
                    <button>Merk levert</button>
                </section>
            </article>
            <article>
                <section><p className='room'>Room X</p></section>
                <section className='dishSection'>
                <p className='dish'>Rett 1</p>
                <p className='dish'>Rett 2</p>
                <p className='dish'>Rett 3</p>
                </section>
                <section>
                    <button>Endre bestilling</button>
                    <button>Merk levert</button>
                </section>
            </article>
        </div>
        </Layout>
    )
}
export default Orderlist