import '../styles/loginpage.scss'
import '../styles/globals.scss'
import Layout from '../components/layout'
export default function Login () {
    return (
        <Layout>
        <div className='mainDiv'>
            <h1>Logo</h1>
            <form>
                <input type="text" defaultValue={"Username"} />
                <input type="text" defaultValue={"Password"} />
                <button type="submit">Login</button>
            </form>
        </div>
        </Layout>
    )
}