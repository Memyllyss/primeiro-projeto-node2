// if composto, verificacao de salario

function verificarSalario() {

    let salario = 1000;

    if (salario >= 5000) {
        return {
            resultado: "Recebe um bom salário"
        };
    } else {
        return {
            resultado: "Você NÃO recebe um bom salário"
        };
    }
}

export { verificarSalario };
