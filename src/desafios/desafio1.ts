// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";
// ----------------------------------- Resposta ------------------------------------------------ //

let employee: {code: number, name: string} = {
  code: 10,
  name: "Jonh"
};

interface Employeer {
  code: number,
  name: string
}

let funcionario = {} as Employeer
funcionario.code = 10;
funcionario.name = "Jonh"