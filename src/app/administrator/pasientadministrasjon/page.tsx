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

                <div className="box">
                    <h1 className="Title">Velg eller opprett nytt rom</h1>
                    <select name="rom" id="rom" className="selectorRoom"> 
                    <option value="Rom 1">Rom 1</option> 
                    <option value="Rom 2">Rom 2</option> 
                    <option value="Rom 3">Rom 3</option>
                    </select>
                    <input type='text' placeholder='Romnr' className='inputbruker'></input>
                    <button className='generatebutton'>Generer rom</button>
                </div>

                <div className="boxValgtrom">
                    <h1 className="Title">Romnummer valgt: Rom X</h1>
                    <button className='generatebutton'>Slett valgt rom</button>
                    <h2 className="Title">Velg diettrestirksjoner</h2>

                    <div className='restriksjonsbox'>

                    <Diettbox Diett='Sukkerfri'/>
                    <Diettbox Diett='Lavkarbo'/>
                    <Diettbox Diett='Redusert Saltinnhold'/>
                    <Diettbox Diett='Keto'/>
                    <Diettbox Diett='Diabetisk diett'/>
                    <Diettbox Diett='Laktosefri'/>
                    <Diettbox Diett='Lavprotein'/>
                    <Diettbox Diett='Høyt fiberinnhold'/>
                    </div>
                    <button className='generatebutton'>Oppdater restriksjoner</button>
                </div>

            </div>
        </Layout>
    )
}

export default pasientadministrasjon