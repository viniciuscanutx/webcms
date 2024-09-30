import { Users } from "@/core/model/Users"
import Image from "next/image"

export interface UserLineProps {
    user: Users
    onClick?: (usuario: Users) => void
}

export default function UserLine(props: UserLineProps) {
    return (
        <div className="flex  bg-zinc-900 items-center gap-5 rounded-md p-4 cursor-pointer" onClick={() => props.onClick?.(props.user)}>
            <Image 
                src={props.user.poster}
                width={80}
                height={80}
                className=""
                alt="Avatar"
            />
            <div className="flex flex-col gap-2">
            <span className="text-xl font-black">{props.user.nome}</span>
            <span className="text-sm text-zinc-400">{props.user.email}</span>
            </div>
            
        </div>
    )
}