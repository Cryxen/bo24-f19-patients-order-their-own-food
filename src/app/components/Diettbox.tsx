// const Diettbox = ({ Diett }: { Diett: string }, { Checked }: { Checked: boolean }) => {
const Diettbox = (props: { Diett: string, Checked: boolean }) => {
    const { Diett, Checked } = props
    // console.log(Diett + " : " + Checked) //FOR DEBUG
    return (
        <div className="diet-container">
            <p>{Diett}</p>
            <label className="switch">
                <input type="checkbox" name="toggleSwitch" checked={Checked ? true : false} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
export default Diettbox