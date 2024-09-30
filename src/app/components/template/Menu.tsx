import Link from "next/link"
import { IconHome, IconMovie } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-12">
                <MenuItem icone={IconHome} texto="Inicio" url="/" />
                <MenuItem icone={IconMovie} texto="Lista de Filmes" url="/users" />
            </nav>
        </aside>
    )
}