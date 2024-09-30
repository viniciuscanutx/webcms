import salvarUsuario from "./user/saveuser"
import obterTodos from "./user/obtainall"
import excluirUsuario from "./user/deleteuser"


export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario,
    }
}