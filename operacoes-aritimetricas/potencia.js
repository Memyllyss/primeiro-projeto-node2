// calculo de potencia

function calcularPotencia() {

    let base = Math.floor(Math.random() * 101);
    let expoente = Math.floor(Math.random() * 10);

    let resultado = base ** expoente;

    return {
        base: base,
        expoente: expoente,
        operacao: "potência",
        resultado: resultado
    };
}

export { calcularPotencia };