"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "stingo";
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValue;
unknowValue = 3;
unknowValue = 'test';
unknowValue = true;
unknowValue = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknowValue === 'string') {
    stringTeste2 = unknowValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("Deru erro", 504);
