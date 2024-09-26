'use client';
import Pagina from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import FormUsers from "@/app/components/user/FormUsers";
import User from "@/app/data/constants/users";
import { IconMovie } from "@tabler/icons-react";
import { useState } from "react";
import { Users } from "@/core/model/Users";

export default function Page() {
    const [usuario, setUsuario] = useState<Users>(User[0])
    return (
        <Pagina className="flex flex-col gap-20">
            <Title icone={IconMovie} principal="Filmes" secundario="Cadastro de Filmes"/>
            {/* <UserList /> */}
            <FormUsers usuario={usuario} onChange={setUsuario} />
        </Pagina>
    )
}