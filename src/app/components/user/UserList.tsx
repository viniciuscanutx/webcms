import users from '@/app/data/constants/users'
import { Users } from '@/core/model/Users'
import UserLine from './UserLine'

export default function UserList() {
    return <div className="flex flex-col gap-4">
        {users.map((user: Users) => {
            return <UserLine key={user.id} user={user}></UserLine>
        })}
        </div>
}