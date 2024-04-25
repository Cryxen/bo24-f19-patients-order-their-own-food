import Image from 'next/image'
import Layout from './components/layout'
import Login from './components/Login'
import { checkUserRole } from '@/libs/router/checkUserRole'

export default function Home() {

  return (
    <Layout>
    <Login />
     </Layout>
  )
}
