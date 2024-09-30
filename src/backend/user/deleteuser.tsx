"use server"

import UserRepository from "./UserRepository";

export default async function excluirUsuario(id: string) {
    return UserRepository.excluir(id)
}