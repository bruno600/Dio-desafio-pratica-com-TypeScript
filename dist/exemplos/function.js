"use strict";
function printValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somarValoresNumericosETratar(2, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(2, 3, dividirPorEleMesmo));
