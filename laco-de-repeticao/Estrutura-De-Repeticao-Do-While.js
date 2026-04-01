// calculo de expoente com o do while

function calcularPotencia() {

    let base = 10;
    let expoente = 3;
    let resultado = 1;
    let i = 0;

    do {
        resultado = resultado * base;
        i++;
    } while (i < expoente);

    return {
        base: base,
        expoente: expoente,
        resultado: resultado
    };
}

export { calcularPotencia };
