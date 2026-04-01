// divisao de numeros

function dividir() {

    let numero1 = 88;
    let numero2 = 4;

    let resultado = numero1 / numero2;

    return {
        numero1: numero1,
        numero2: numero2,
        operacao: "divisão",
        resultado: resultado
    };
}

export { dividir };
