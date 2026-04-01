
//maior

function verificarMaioridade() {
    let idade = 18;

    return {
        idade: idade,
        resultado: idade > 17 ? "Maior de idade" : "Menor de idade"
    };
}

export { verificarMaioridade };


//Menor

function comparacao() {
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 100);

    return {
        a: a,
        b: b,
        resultado: a < b
    };
}

export { comparacao };

// Maior ou igual

function verificarIdoso() {
    let idade = 60;

    return {
        idade: idade,
        resultado: idade >= 60 ? "Idoso" 
        : "Não idoso"
    };
}

export { verificarIdoso };



//Menor ou igual

function verificarNovinho() {
    let idade = 35;

    return {
        idade: idade,
        resultado: idade <= 18 ? "Novinho" : "Não é novinho é betinha"
    };
}

export { verificarNovinho };


//igual

function compararIgualdade() {

    let idade5 = 18;
    let idade6 = "18";

    return {
        "18 == '18'": idade5 == idade6,
        "18 === '18'": idade5 === idade6
    };
}

export { compararIgualdade };



//diferente

function verificarDiferente() {
    let ano = 2026;

    return {
        ano: ano,
        diferenteDe2025: ano != 2025
    };
}

export { verificarDiferente };



