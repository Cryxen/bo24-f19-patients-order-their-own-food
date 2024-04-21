import { ChangeEvent } from "react"

// const Diettbox = ({ Diett }: { Diett: string }, { Checked }: { Checked: boolean }) => {
const Diettbox = (props: { Diett: string, Checked: boolean, onChangeMethod?: (event: ChangeEvent<HTMLInputElement>) => void }) => {
    const { Diett, Checked, onChangeMethod } = props
    // console.log(Diett + " : " + Checked) //FOR DEBUG
    return (
        <div className="diet-container">
            <p className="diet-name">{Diett}</p>
            <label className="switch">
                <input type="checkbox" name="toggleSwitch" checked={Checked ? true : false} onChange={onChangeMethod} value={Diett}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}
export default Diettbox
