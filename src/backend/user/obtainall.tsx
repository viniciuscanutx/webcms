"use server"

import UserRepository from "./UserRepository";

export default async function obterTodos() {
    return UserRepository.obterTodos()
}