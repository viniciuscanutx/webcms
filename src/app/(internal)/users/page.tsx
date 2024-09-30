'use client';
import Pagina from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import FormUsers from "@/app/components/user/FormUsers";
import { IconMovie, IconPlus } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Users } from "@/core/model/Users";
import Backend from "@/backend";

export default function Page() {
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

    return (
        <Pagina className="flex flex-col gap-10">
            <Title icone={IconMovie} principal="Filmes" secundario="Lista de Filmes" />
            {usuario ? (
                <FormUsers
                    usuario={usuario}
                    onChange={setUsuario}
                    salvar={salvar}
                    excluir={excluir}
                    cancelar={() => setUsuario(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => setUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Filme</span>
                        </button>
                    </div>
                    
                    <UserList usuarios={usuarios} onClick={setUsuario} />

                </>
            )}

        </Pagina>
    )
}