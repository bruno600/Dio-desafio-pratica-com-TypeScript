"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumeros(num1, num2, devePrintar, frase) {
    let resulado = num1 + num2;
    if (devePrintar)
        console.log(frase + resulado);
    return num1 + num2;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button)
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(adicionarNumeros(Number(input1.value), parseFloat(input2.value), devePrintar, frase));
    });
