let button = document.getElementById("button")
let input1 = document.getElementById("input1") as HTMLInputElement
let input2 = document.getElementById("input2") as HTMLInputElement

function adicionarNumeros(num1: number, num2: number, devePrintar: boolean, frase: string) {
  let resulado = num1 + num2
  if (devePrintar)
    console.log(frase + resulado)
  return num1 + num2;
}

let devePrintar = true;
let frase: string = 'O valor é: '

if (button)
  button.addEventListener('click', () => {
    if (input1 && input2)
      console.log(adicionarNumeros(Number(input1.value), parseFloat(input2.value), devePrintar, frase))
  })