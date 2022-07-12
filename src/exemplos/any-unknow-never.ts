let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "stingo";
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta

let unknowValue: unknown;
unknowValue = 3;
unknowValue = 'test';
unknowValue = true;
unknowValue = 'vai sim';

let stringTeste2: string = 'agora vai';

if (typeof unknowValue === 'string') {
  stringTeste2 = unknowValue
}

function jogaErro(erro: string, codigo: number): never {
  throw {error: erro, code: codigo}
}

jogaErro("Deru erro", 504)