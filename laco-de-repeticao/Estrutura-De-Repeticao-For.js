// tabuada até o 10 utilizando o For

function gerarTabuada() {

    let tabuadaCompleta = [];

    for (let num = 1; num <= 10; num++) {

        let tabuada = [];

        for (let i = 1; i <= 10; i++) {
            tabuada.push({
                operacao: `${num} x ${i}`,
                resultado: num * i
            });
        }

        tabuadaCompleta.push({
            numero: num,
            resultados: tabuada
        });
    }

    return {
        tabuada: tabuadaCompleta
    };
}

export { gerarTabuada };

