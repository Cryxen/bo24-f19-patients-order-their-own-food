import Footer from './Footer'
import Header from './header'
const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}
export default Layout