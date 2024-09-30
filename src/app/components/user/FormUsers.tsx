import { Users } from "@/core/model/Users"
import InputText from "../shared/InputText"
import TextArea from "../shared/TextArea"

export interface FormUsersProps {
    usuario: Partial<Users>
    onChange: (usuario: Partial<Users>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormUsers(props: FormUsersProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputText className="p-3"
            label="Titulo" 
            type="text" 
            value={props.usuario.nome} 
            onChange={
                (e) => props.onChange?.({ ...props.usuario, nome: e.target.value })} 
            />
            <InputText className="p-3"
            label="Poster" 
            type="text" 
            value={props.usuario.poster} 
            onChange={
                (e) => props.onChange?.({ ...props.usuario, poster: e.target.value })} 
            />
            <TextArea className="p-3 bg-zinc-800 w-full h-auto resize-none overflow-y-auto break-words rounded-md"
            label="Overview"
            value={props.usuario.email} 
            onChange={
                (e) => props.onChange?.({ ...props.usuario, email: e.target.value })} 
            />
           <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.salvar}>Salvar</button>
                <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
           </div>
        </div>
    )
}