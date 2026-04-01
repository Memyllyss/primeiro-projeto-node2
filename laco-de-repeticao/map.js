// multiplicacao dos numeros de um vetor utilizndo o map

function multiplicarVetor() {

    let num = [10, 20, 30, 40, 50];

    let novoNum = num.map(n => n * 10);

    return {
        vetorOriginal: num,
        vetorMultiplicado: novoNum
    };
}

export { multiplicarVetor };



