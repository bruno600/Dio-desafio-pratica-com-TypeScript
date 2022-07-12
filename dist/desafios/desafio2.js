"use strict";
// // Como podemos melhorar o esse código usando TS?
Object.defineProperty(exports, "__esModule", { value: true });
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
