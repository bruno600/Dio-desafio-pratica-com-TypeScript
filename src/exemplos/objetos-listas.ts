const pessoa = {
  nome: "Mario",
  idade: 99,
  profissao: 'encanador'
}

pessoa.idade = 999;

const bruno: { nome: string, idade: number, profissao: string } = {
  nome: 'Bruno',
  idade: 20,
  profissao: 'desenvolvedor'
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.JogadoraDeFutebol
}

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.JogadoraDeFutebol
}

const jessica: Estudante = {
  nome: 'Jessica',
  idade: 28,
  profissao: Profissao.Desenvolvedora,
  materias: ['Matemática', 'Programação ']
}

const monica: Estudante = {
  nome: 'Monica',
  idade: 28,
  materias: ['Matemática', 'Programação', 'Geografia']
}

function listar(lista: string[]) {
  for (let item of lista) {
    console.log('- ', item);
  }
}

listar(monica.materias);