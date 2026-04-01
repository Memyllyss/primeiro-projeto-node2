// calculando quantos anos levara para Joao ficar mais alto que Pedro usando o while

function calcularAnosParaUltrapassar() {

    let alturaP = 145;
    let alturaJ = 134;
    let anos = 0;

    while (alturaJ <= alturaP) {
        alturaJ += 2.5;
        alturaP += 2;
        anos++;
    }

    return {
        alturaInicialPedro: 145,
        alturaInicialJoao: 134,
        anos: anos,
        mensagem: `João ficará mais alto que Pedro em ${anos} anos.`
    };
}

export { calcularAnosParaUltrapassar };
