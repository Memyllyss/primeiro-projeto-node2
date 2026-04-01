//soma acumulada entre vetores utilizando o for each
function somaAcumuladora() {

    let vetorA = [1,2,3,4,5,6,7,8,9,10];
    let vetorB = [];

    let soma = 0;

    vetorA.forEach((valor, i) => {
        soma += valor;
        vetorB[i] = soma;
    });

    return {
        vetorA: vetorA,
        vetorB: vetorB
    };
}

export { somaAcumuladora};