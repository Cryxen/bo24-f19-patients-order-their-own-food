"use client"
import { checkUserRole } from '@/libs/router/checkUserRole'
import Footer from './Footer'
import Header from './header'
const Layout = ({ children }) => {

    // checkUserRole()

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout