import express from "express";

import { concatenacao } from "./declaracao-variaveis/Concatenacao-de-String.js";
import { variavelConst } from "./declaracao-variaveis/variavelConst.js";
import { variavelLet } from "./declaracao-variaveis/variavelLet.js";
import { variavelVar } from "./declaracao-variaveis/variavelVar.js";
import { verificarSalario } from "./estrutura-condicional/ifComposto.js";
import { verificarSalario2 } from "./estrutura-condicional/ifElse.js";
import { verificarSalario3 } from "./estrutura-condicional/ifSimples.js";
import { classificacaoNomes } from "./estrutura-condicional/switchCase.js";
import { classificacaoSalario4 } from "./estrutura-condicional/ternario.js";
import { calcularPotencia } from "./laco-de-repeticao/Estrutura-De-Repeticao-Do-While.js";
import { gerarTabuada } from "./laco-de-repeticao/Estrutura-De-Repeticao-For.js";
import { somaAcumuladora } from "./laco-de-repeticao/ForEach.js";
import { multiplicarVetor } from "./laco-de-repeticao/map.js";
import { dividir } from "./operacoes-aritimetricas/divisao.js";
import { somar } from "./operacoes-aritimetricas/mais.js";
import { subtrair } from "./operacoes-aritimetricas/menos.js";
import { multiplicar } from "./operacoes-aritimetricas/multiplicacao.js";
import { calcularRaiz } from "./operacoes-aritimetricas/raiz.js";
import { verificarParOuImpar } from "./operacoes-aritimetricas/sobras.js";
import { comparacao, compararIgualdade, verificarDiferente, verificarIdoso, verificarMaioridade, verificarNovinho } from "./operacoes-relacionais/operadores-relacionais.js";
import { verificarAcessoE } from "./operadores-logicos/e.js";
import { demonstrarNot } from "./operadores-logicos/not.js";
import { verificarAcessoOu } from "./operadores-logicos/ou.js";
import { somarVetor } from "./vetores/vetorAcumulacao.js";
import { adicionarNoFim, adicionarNoInicio } from "./vetores/vetorAdicao.js";
import { separarParesEImpares } from "./vetores/vetorBusca.js";
import { removerDoFim, removerDoInicio } from "./vetores/vetorRemocao.js";

const app = express();

app.get("/", (req, res) => {
    res.json({ mensagem: "Servidor funcionando 🚀" });
});

app.get("/concatenacao", (req, res) => {
    res.json(concatenacao());
});

app.get("/variavelConst", (req, res) => {
    res.json(variavelConst());
});

app.get("/variavelVar", (req, res) => {
    res.json(variavelVar());
});

app.get("/variavelLet", (req, res) => {
    res.json(variavelLet());
});

app.get("/ifComposto", (req, res) => {
    res.json(verificarSalario());
});

app.get ("/ifElse", (req, res)=>{
    res.json(verificarSalario2());
} );

app.get ("/ifSimples", (req, res)=>{
    res.json(verificarSalario3());
} );

app.get ("/switchCase", (req, res)=>{
    res.json(classificacaoNomes());
} );

app.get ("/ternario", (req, res)=>{
    res.json(classificacaoSalario4());
} );

app.get ("/doWhile", (req, res)=>{
    res.json(calcularPotencia());
} );

app.get ("/for", (req, res)=>{
    res.json(gerarTabuada());
} );

app.get ("/while", (req, res)=>{
    res.json(gerarTabuada());
} );

app.get ("/forEach", (req, res)=>{
    res.json(somaAcumuladora());
} );

app.get ("/map", (req, res)=>{
    res.json(multiplicarVetor());
} );


app.get ("/map", (req, res)=>{
    res.json(multiplicarVetor());
} );


app.get ("/divisao", (req, res)=>{
    res.json(dividir());
} );


app.get ("/mais", (req, res)=>{
    res.json(somar());
} );


app.get ("/menos", (req, res)=>{
    res.json(subtrair());
} );


app.get ("/multiplicacao", (req, res)=>{
    res.json(multiplicar());
} );

app.get ("/potencia", (req, res)=>{
    res.json(calcularPotencia());
} );


app.get ("/raiz", (req, res)=>{
    res.json(calcularRaiz());
} );


app.get ("/sobras", (req, res)=>{
    res.json(verificarParOuImpar());
} );


app.get ("/maior", (req, res)=>{
    res.json(verificarMaioridade());
} );


app.get ("/menor", (req, res)=>{
    res.json(comparacao());
} );


app.get ("/maiorOuIgual", (req, res)=>{
    res.json(verificarIdoso());
} );


app.get ("/menorOuIgual", (req, res)=>{
    res.json(verificarNovinho());
} ); 

app.get ("/igual", (req, res)=>{
    res.json(compararIgualdade());
} ); 

app.get ("/diferente", (req, res)=>{
    res.json(verificarDiferente());
} );  

app.get ("/e", (req, res)=>{
    res.json(verificarAcessoE());

} ); 
app.get ("/not", (req, res)=>{
    res.json(demonstrarNot());
} ); 

app.get ("/ou", (req, res)=>{
    res.json(verificarAcessoOu());
} ); 

app.get ("/vetorAcumulacao", (req, res)=>{
    res.json(somarVetor());
} ); 

app.get ("/vetorAdicao1", (req, res)=>{
    res.json(adicionarNoFim());
} ); 

app.get ("/vetorAdicao2", (req, res)=>{
    res.json(adicionarNoInicio());
} );

app.get ("/vetorBusca", (req, res)=>{
    res.json(separarParesEImpares());
} );

app.get ("/vetorRemocao1", (req, res)=>{
    res.json(removerDoFim());
} );

app.get ("/vetorRemocao2", (req, res)=>{
    res.json(removerDoInicio());
} );

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000");
});