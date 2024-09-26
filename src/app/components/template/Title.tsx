import { ElementType } from "react"

export interface TitleProps {
    principal: string
    secundario: string
    icone: ElementType
}

export default function Title(props: TitleProps){
    return (
        <div className="flex gap-2">
            <props.icone size={55} stroke={1.2}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.principal}</h1>
                <h1 className="text-zinc-400">{props.secundario}</h1>
            </div>
        </div>
    )
}