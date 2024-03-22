import Layout from "@/app/components/layout"
import Diettbox from "@/app/components/Diettbox"
import '../../styles/pasientadministrasjon.scss'
import '../../styles/globals.scss'

/*VIRKER KUN PÅ DEKSTOP PER NÅ*/

const pasientadministrasjon = () => {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Pasientadministrasjon</h1>
                <div className="main-wrapper">
                    <div className="room-container">
                        <h2 className="title">Velg rom</h2>
                        <select name="room" id="room" className="room dropdown">
                            <option value="room 1">Rom 1</option>
                            <option value="room 2">Rom 2</option>
                            <option value="room 3">Rom 3</option>
                        </select>
                    </div>
                    <h2 className="title">Velg diettrestirksjoner</h2>
                    <div className='restriction-container'>
                        <Diettbox Diett='Sukkerfri'/>
                        <Diettbox Diett='Lavkarbo'/>
                        <Diettbox Diett='Redusert Saltinnhold'/>
                        <Diettbox Diett='Keto'/>
                        <Diettbox Diett='Diabetisk diett'/>
                        <Diettbox Diett='Laktosefri'/>
                        <Diettbox Diett='Lavprotein'/>
                        <Diettbox Diett='Høyt fiberinnhold'/>
                    </div>
                    <div className="config-container">
                        <button className='generate button'>Oppdater restriksjoner</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default pasientadministrasjon