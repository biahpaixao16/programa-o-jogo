const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {

        enunciado: "no âmbito social, você prefere:",
        alternativas:
            [
                {
                    texto: "Sorrir com o Patati, porém aumentar a desigualdade no mundo fazendo com que todos entrem em conflitos.",
                    afirmacao: "afirmacao",
                },
                {
                    texto: "Brincar com o Patatá , porém iniciar a 3° Guerra Mundial e se tornar um dos recrutas.",
                    afirmacao: "afirmacao",
                },
            ]
    },
    {

        enunciado: "no âmbito ambiental, você prefere:",
        alternativas:
            [
                {
                    texto: "Poder escolher o que vai comer para o resto da vida, porém todo mundo terá que beber da água do Rio Senna todo sujo, poluído, podre, capenga, estragado, pela manhã.",
                    afirmacao: "afirmacao",
                },
                {
                    texto: "Se tornar filho(a) da Rihanna, porém desmatar a Amazônia inteira junto do Bolsonaro nos cavalos da cavalaria com um isqueiro bic e uma tesoura sem um extintor.",
                    afirmacao: "afirmacao",
                },
            ]
    },
    {

        enunciado: "no âmbito tecnológico, você prefere:",
        alternativas:
            [
                {
                    texto: "Se torna a pessoa mais rica do mundo, porém se casar com o Elon Musk e viver com ele sem poder se separar para o resto de suas vidas.",
                    afirmacao: "afirmacao",
                },
                {
                    texto: "Descobrir como funciona a inteligência artificial, porém terá que fazer parte de um trisal com a Taylor Swift e o Kanye West e escutar eles cantando todo dia e noite no banho juntos.",
                    afirmacao: "afirmacao",
                },
            ]
    },

]

let atual = 0;
let perguntaatual;

function mostraPerguntas () {
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;

}
  
  mostraPerguntas();

