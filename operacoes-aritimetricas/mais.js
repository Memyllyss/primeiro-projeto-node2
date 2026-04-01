//soma de numeros

function somar (){
let numero1 = 100;
let numero2 = 130;

let resultado = numero1 + numero2;

return {
        numero1: numero1,
        numero2: numero2,
        operacao: "somando",
        resultado: resultado
    };

}

export {somar} ;