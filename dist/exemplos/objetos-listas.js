"use strict";
const pessoa = {
    nome: "Mario",
    idade: 99,
    profissao: 'encanador'
};
pessoa.idade = 999;
const bruno = {
    nome: 'Bruno',
    idade: 20,
    profissao: 'desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.JogadoraDeFutebol
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.JogadoraDeFutebol
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Programação ']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática', 'Programação', 'Geografia']
};
function listar(lista) {
    for (let item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
