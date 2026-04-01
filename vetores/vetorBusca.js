/*Exercicio: Ler um vetor A com 20 elementos. Separar os elementos pares e ímpares de 
A utilizando apenas um vetor extra B. */

function separarParesEImpares() {

    let vetor = Array.from({length: 20}, () => Math.floor(Math.random() * 100));

    let pares = vetor.filter(n => n % 2 === 0);
    let impares = vetor.filter(n => n % 2 !== 0);

    return {
        vetor,
        pares,
        impares
    };
}

export { separarParesEImpares };    