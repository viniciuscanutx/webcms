import salvarUsuario from "./user/saveuser"
import obterTodos from "./user/obtainall"


export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
    }
}