import excluirUsuario from "./usuario/excluirUsuario";
import obterTodos from "./usuario/obterTodos";
import salvarUsuario from "./usuario/salvarUsuario";

export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario
    }
}