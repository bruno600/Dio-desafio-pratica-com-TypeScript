let valorAny: any;
valorAny = 1;
valorAny = true;
valorAny = 'aaa ';

function somarString(string1: string, string2: string) {
  console.log(string1 + string2)
}

somarString(valorAny, valorAny)
somarString("Olá! ", "Mundo.")