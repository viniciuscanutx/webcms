import Pagina from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import { IconMovie } from "@tabler/icons-react";

export default function Page() {
    return (
        <Pagina className="flex flex-col gap-20">
            <Title icone={IconMovie} principal="Filmes" secundario="Cadastro de Filmes"/>
            <UserList />
        </Pagina>
    )
}