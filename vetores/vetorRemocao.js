// Remocao de nomes no vetor utilizando o pop que remove o ultimo nome 
function removerDoFim() {

    let nomes = ["Emolly", "Micaelly", "Daiane"];
    nomes.pop();

    return { nomes };
}

export { removerDoFim };


// removendo o primeiro nome utilizando o shift

function removerDoInicio() {

    let nomes = ["Micaely", "Emolly"];
    nomes.shift();

    return { nomes };
}

export { removerDoInicio };