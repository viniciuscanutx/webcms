import { useState, useEffect } from "react";
import { Users } from "@/core/model/Users";
import Backend from "@/backend";


export default function useUsers() {
    const [usuarios, setUsuarios] = useState<Users[]>([])
    const [usuario, setUsuario] = useState<Partial<Users> | null> (null)

    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios)
    }, [])

    async function salvar() {
        if (!usuario) return
        await Backend.usuarios.salvar(usuario)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    async function excluir() {
        if (!usuario || !usuario.id) return
        await Backend.usuarios.excluir(usuario.id)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    return {

        usuarios,
        usuario,
        salvar,
        excluir,
        cancelar: () => setUsuario(null),
        alterarUsuario: (usuario: Partial<Users> | null) => setUsuario(usuario)

    }
}