//acumalar o valor de 5 numeros do vetor usando uma variavel acumuladora
function somarVetor() {

    let num = [10,20,30,40,50];
    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }

    return {
        vetor: num,
        soma: soma
    };
}

export { somarVetor };
