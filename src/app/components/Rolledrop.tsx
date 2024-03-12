import { User } from "@/features/users/types"
import { Dispatch, SetStateAction } from "react"

const Rolledrop = (props: { user: User, changeRole: (event: React.ChangeEvent<HTMLSelectElement>, user: User) => void }) => {

    const { user, changeRole } = props

    return (
        <select name="rolle" id="rolle" value={user?.role} onChange={(e) => changeRole(e, user)}>
            <option value="administrator">Admin</option>
            <option value="kitchen">Kjøkken</option>
            <option value="healthcare">Helsefagarbeider</option>
        </select>
    )
}
export default Rolledrop