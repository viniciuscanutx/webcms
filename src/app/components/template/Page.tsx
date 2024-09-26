
/* Fazendo o elemento pagina aceitar elementos filhos. */
export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div>{props.children}</div>
    )
}