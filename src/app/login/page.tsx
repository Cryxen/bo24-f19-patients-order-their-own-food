import '../styles/loginpage.scss'
export default function Login () {
    return (
        <div className='mainDiv'>
            <h1>Logo</h1>
            <form>
                <input type="text" defaultValue={"Username"} />
                <input type="text" defaultValue={"Password"} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}