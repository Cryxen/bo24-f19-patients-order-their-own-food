import '../../styles/globals.scss'
import '../../styles/dietaryinfo.scss'
import Layout from '../../components/layout'
import DietinfoComp from '@/app/components/dietinfoComp';

export default function dietaryinfo() {
    return (
        <Layout>
            <div className="mainDiv">
                <h1>Diett informasjon</h1>
                <section className='dashboardwrap'>
                
                <DietinfoComp Rom='ROM 1223' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1224' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1225' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1226' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1227' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1228' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                <DietinfoComp Rom='ROM 1229' Diett="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

                </section>
            </div>
        </Layout>
    )
}