import '../../styles/globals.scss'
import Layout from '../../components/layout'
import DietinfoComp from '@/app/components/dietinfoComp';

export default function dietaryinfo() {

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Diett informasjon</h1>

                        <DietinfoComp />
            </div>
        </Layout>
    )
}
