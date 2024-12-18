import { User } from "@/features/users/types"
import { Dispatch, SetStateAction } from "react"

const Rolledrop = (props: { user: User, changeRole: (event: React.ChangeEvent<HTMLSelectElement>, user: User) => void }) => {

    const { user, changeRole } = props

    return (
        <select className="role-dropdown" id="rolle" value={user?.role} onChange={(e) => changeRole(e, user)}>
            {user.role === 'undefined' ? <option value=''>Velg rolle</option> : ''}
            <option value="administrator">Admin</option>
            <option value="kitchen">Kjøkken</option>
            <option value="healthcare">Helsefagarbeider</option>
        </select>
    )
}
export default Rolledrop