import users from '@/app/data/constants/users'
import { Users } from '@/core/model/Users'
import UserLine from './UserLine'

export interface UserListProps {
    onClick?: (user: Users) => void
}


export default function UserList(props: UserListProps) {
    return <div className="flex flex-col gap-4">
        {users.map((user: Users) => {
            return <UserLine key={user.id} user={user} onClick={props.onClick}></UserLine>
        })}
        </div>
}