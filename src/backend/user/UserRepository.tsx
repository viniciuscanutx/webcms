import { Users } from "@/core/model/Users";
import { Usuario } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";

export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()

    static async obterTodos(): Promise<Usuario[]> {
        return await this.db.usuario.findMany()
    }

    static async salvar(usuario: Users): Promise<Usuario> {
        return await this.db.usuario.upsert( {
            where: { id: usuario.id },
            update: usuario, 
            create: usuario
        })
    }

    static async obterPorId(id: string): Promise<Usuario> {
        const usuario = await this.db.usuario.findUnique({ where: {id} })
        return usuario as Usuario
    }

}