import Image from 'next/image'
import Layout from './components/layout'
import Login from './components/Login'

export default function Home() {
  return (
    <Layout>
    <h1>bo24-f19-patients-order-their-own-food</h1>
    <Login />
     </Layout>
  )
}
