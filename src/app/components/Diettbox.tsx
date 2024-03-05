const Diettbox = ({Diett}: {Diett: string}) => {
    return(
        <div className="smallbox">
        <p>{Diett}</p>
        <label className="switch">
        <input type="checkbox" name="toggleSwitch"/>
        <span className="slider round"></span>
        </label>
    </div>
    )
}
export default Diettbox