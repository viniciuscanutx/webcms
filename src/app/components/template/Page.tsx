import Menu from "./Menu"

/* Fazendo o elemento pagina aceitar elementos filhos. */
export interface PaginaProps {
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex">
            <Menu />
            <main className={`flex-1 p-7 ${props.className ?? ''}`}>{props.children}</main>
            </div>
    )
}