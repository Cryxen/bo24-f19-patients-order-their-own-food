const RecievedMSG = ({Title, room, content}: {Title: string; room: string; content: string}) => {
    return(
        <div className="parent">
        <div className="div1"><h1>{Title}</h1> </div>
        <div className="div2"><p>{content}</p> </div>
        <div className="div3"><p>{room}</p> </div>
        <div className="div4"><button className='removeMsg'>Fjern melding</button> </div>
        </div>
    )
}
export default RecievedMSG