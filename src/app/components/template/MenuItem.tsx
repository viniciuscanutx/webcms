import Link from "next/link"
import { ElementType } from "react"

export interface MenuItemProps {
    icone: ElementType
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black hover:rounded-lg"> 
        <props.icone size={24} stroke={1.8}/>
        <span>{props.texto}</span>
        </Link>
    )
}