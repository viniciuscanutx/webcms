import { Users } from "@/core/model/Users";
import { Usuario, PrismaClient } from "@prisma/client";

export default class UserRepository {
    // Instância do PrismaClient
    private static db: PrismaClient = new PrismaClient();
    // Obtém todos os usuários
    static async obterTodos(): Promise<Usuario[]> {
        return await this.db.usuario.findMany(); // Verifique o nome do modelo no schema.prisma (deve ser 'usuario' ou 'Usuario')
    }
    // Salva ou atualiza um usuário
    static async salvar(usuario: Users): Promise<Usuario> {
        return await this.db.usuario.upsert({
            where: { id: usuario.id },
            update: usuario,
            create: usuario
        });
    }
    // Obtém um usuário por ID
    static async obterPorId(id: string): Promise<Usuario | null> {
        return await this.db.usuario.findUnique({ where: { id } }); // Retorna null se não encontrar
    }

    static async excluir(id: string): Promise<void> {
        await this.db.usuario.delete({
            where: {id},
        })
    }
}
