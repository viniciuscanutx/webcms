"use server"

import { Users } from "@/core/model/Users";
import Id from "@/core/utils/id";
import UserRepository from "./UserRepository";

export default async function salvarUsuario(usuario: Partial<Users>) {

    const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo,
    }
    
    return UserRepository.salvar(novoUsuario as Users)
}