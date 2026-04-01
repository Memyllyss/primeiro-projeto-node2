// controle de acesso utilizando o operador && ou E



function verificarAcessoE() {

    let temIdade = true;
    let temAutorizacao = false;

    return {
        acesso: temIdade && temAutorizacao ? "Permitido" : "Negado"
    };
}

export { verificarAcessoE };
