import Menu from "./Menu"

/* Fazendo o elemento pagina aceitar elementos filhos. */
export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex">
            <Menu />
            <main className="flex-1 p-7">{props.children}</main>
            </div>
    )
}