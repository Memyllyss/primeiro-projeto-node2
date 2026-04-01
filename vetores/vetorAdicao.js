// adicao de um nome utilizando o push que coloca por ultimo
function adicionarNoFim() {

    let nomes = ["Emolly", "Micaelly", "Daiane"];
    nomes.push("Estevao");

    return { nomes };
}

export { adicionarNoFim };

// adicao de nome colocando em primeiro utilizando o unshift

function adicionarNoInicio() {

    let nomes = ["Micaely", "Emolly"];
    nomes.unshift("Estevao");

    return { nomes };
}

export { adicionarNoInicio };