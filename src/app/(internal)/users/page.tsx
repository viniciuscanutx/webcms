'use client';
import Pagina from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import FormUsers from "@/app/components/user/FormUsers";
import User from "@/app/data/constants/users";
import { IconMovie } from "@tabler/icons-react";
import { useState } from "react";
import { Users } from "@/core/model/Users";
import Backend from "@/backend";

export default function Page() {
    const [usuarios, setUsuarios] = useState<Users[]>([])
    const [usuario, setUsuario] = useState<Partial<Users> | null>(null)

    function salvar() {
        if (!usuario) return
        Backend.usuarios.salvar(usuario)
    }

    function excluir() {

    }

    return (
        <Pagina className="flex flex-col gap-20">
            <Title icone={IconMovie} principal="Filmes" secundario="Cadastro de Filmes" />
            {/* <UserList /> */}
            {usuario ? (
                <FormUsers
                    usuario={usuario}
                    onChange={setUsuario}
                    salvar={salvar}
                    excluir={excluir}
                    cancelar={() => setUsuario(null)}
                />
            ) : (
                <UserList onClick={setUsuario}/>
            )}

        </Pagina>
    )
}