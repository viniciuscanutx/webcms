'use client'

import Pagina from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import FormUsers from "@/app/components/user/FormUsers";
import { IconMovie, IconPlus } from "@tabler/icons-react";
import useUsers from "@/app/data/hooks/useUsers";

export default function Page() {
    const{ usuario, usuarios, salvar, excluir, alterarUsuario } = useUsers()

    return (
        <Pagina className="flex flex-col gap-10">
            <Title icone={IconMovie} principal="Filmes" secundario="Lista de Filmes" />
            {usuario ? (
                <FormUsers
                    usuario={usuario}
                    onChange={alterarUsuario}
                    salvar={salvar}
                    excluir={excluir}
                    cancelar={() => alterarUsuario(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => alterarUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Filme</span>
                        </button>
                    </div>
                    
                    <UserList usuarios={usuarios} onClick={alterarUsuario} />

                </>
            )}

        </Pagina>
    )
}