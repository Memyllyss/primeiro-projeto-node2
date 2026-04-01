// calculo de sobras

function verificarParOuImpar() {
    let num = Math.floor(Math.random() * 101);

    return {
        numero: num,
        resultado: num % 2 === 0 ? "Par" : "Ímpar"
    };
}

export { verificarParOuImpar };
