// validacao de acesso utilzando o !! ou OU

function verificarAcessoOu() {

    let temIdade = true;
    let temAutorizacao = false;

    return {
        acesso: temIdade || temAutorizacao ? "Permitido" : "Negado"
    };
}

export { verificarAcessoOu };