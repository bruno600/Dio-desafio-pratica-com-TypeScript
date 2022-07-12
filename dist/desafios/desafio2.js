"use strict";
// // Como podemos melhorar o esse código usando TS?
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//   nome: "laura",
//   idade: "32",
//   profissao: "Atriz"
// };
// let pessoa4 = {
//   nome = "carlos",
//   idade = 19,
//   profissao = "padeiro"
// }
// ----------------------------------- Resposta ------------------------------------------------ //
var Desafios;
(function (Desafios) {
    var desafio2;
    (function (desafio2) {
        let Profissao;
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
    })(desafio2 = Desafios.desafio2 || (Desafios.desafio2 = {}));
})(Desafios || (Desafios = {}));
