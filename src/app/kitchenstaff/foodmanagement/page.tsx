import Layout from "@/app/components/layout"
import '../../styles/foodmanagement.scss'

const Foodmanagement = () => {
    return (
        <Layout>
        <div className="mainDiv">
            <h1>Mat håndtering</h1>
            <section>
                <div>
                    <input type="text" placeholder="Søk"></input>
                    <select name="categories">
                        <option>Velg en kategori</option>
                        <option>Matkategori 1</option>
                        <option>Matkategori 2</option>
                        <option>Matkategori 3</option>
                        <option>Matkategori 4</option>
                    </select>
                    <select name="filters">
                        <option>Velg en filter</option>
                        <option>Filter 1</option>
                        <option>Filter 2</option>
                        <option>Filter 3</option>
                        <option>Filter 4</option>
                    </select>
                </div>
                <div className="results">
                    <span>Viser resultater:</span>
                    <select name="sort">
                        <option>Sorteringsmetoder</option>
                        <option>Nyeste</option>
                        <option>Eldste</option>
                        <option>Synkende</option>
                        <option>Stigende</option>
                    </select>
                </div>
            </section>
            <section className="food-database">
                <table>
                    <tr>
                        <th></th>
                        <th>Matnavn</th>
                        <th>Beskrivelse</th>
                        <th>Kategori</th>
                        <th>Andre info</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 1</td>
                        <td>Beskrivelse 1</td>
                        <td>Kategori 1</td>
                        <td>Andre info 1</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 2</td>
                        <td>Beskrivelse 2</td>
                        <td>Kategori 2</td>
                        <td>Andre info 2</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 3</td>
                        <td>Beskrivelse 3</td>
                        <td>Kategori 3</td>
                        <td>Andre info 3</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 3</td>
                        <td>Beskrivelse 3</td>
                        <td>Kategori 3</td>
                        <td>Andre info 3</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 4</td>
                        <td>Beskrivelse 4</td>
                        <td>Kategori 4</td>
                        <td>Andre info 4</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>Bilde av mat</td>
                        <td>Matnavn 5</td>
                        <td>Beskrivelse 5</td>
                        <td>Kategori 5</td>
                        <td>Andre info 5</td>
                        <td><button>Edit</button></td>
                    </tr>
                </table>
            </section>
            <section className="buttons">
                <button>Legg til ny matrett</button>
                <button>Fjern matrett</button>
            </section>
        </div>
        </Layout>
    )
}
export default Foodmanagement