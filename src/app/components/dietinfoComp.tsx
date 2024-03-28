const dietinfoComp = ({Rom, Diett}: {Rom: string; Diett: string}) => {
    return(

        <article className='gridLayout'>

            <div className='div1'>
                <h1>{Rom}</h1>
            </div>

            <div className='div2'>
                <p>{Diett}</p>
            </div>

        </article>

    )
}
export default dietinfoComp