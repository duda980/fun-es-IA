const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a principal função da mitocôndria nas células eucarióticas?"",
        alternativas: [
            {
                texto: " Gerar energia através da respiração celular",
                afirmacao: "você é um genio "
            },
            {
                texto: "Controlar a divisão celular",
                afirmacao: "não foi dessa vez"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do processo pelo qual as plantas convertem luz solar em energia?",
        alternativas: [
            {
                texto: " Fotossíntese",
                afirmacao: "A fotossíntese é o processo em que as plantas (e algumas bactérias) usam a luz solar para converter dióxido de carbono e água em glicose (açúcar) e oxigênio."
            },
            {
                texto: "Respiração celular",
                afirmacao: " A respiração celular é o processo pelo qual as células convertem a glicose (ou outro combustível orgânico) em energia utilizável, na forma de ATP (adenosina trifosfato), e libera dióxido de carbono e água como subprodutos."
            }
        ]
    },
    {
        enunciado: "Qual é a principal diferença entre células procariontes e eucariontes?",
        alternativas: [
            {
                texto: "Apenas as células eucariontes possuem núcleo definido",
                afirmacao: " principal diferença entre essas duas tipos de células é, de fato, a presença ou ausência de um núcleo definido. As células eucarióticas têm esse núcleo envolto por uma membrana, o que as torna diferentes das procarióticas, que não possuem esse núcleo."
            },
            {
                texto: "As células eucariontes são menores que as procariontes",
                afirmacao: " está incorreta porque as células eucariontes são geralmente maiores do que as células procariontes, não menores."
            }
        ]
    },
    {
        enunciado: "O que são os anticorpos no sistema imunológico?",
        alternativas: [
            {
                texto: " Substâncias que atacam patógenos invasores",
                afirmacao: "Os anticorpos são proteínas do sistema imunológico que se ligam a patógenos e ajudam a neutralizá-los ou removê-los do corpo"
            },
            {
                texto: "Enzimas que digerem nutrientes",
                afirmacao: "Isso se refere a enzimas digestivas, como as que estão no estômago ou intestinos, e não aos anticorpos".

"
            }
        ]
    },
    {
        enuncia:"Qual é o papel da clorofila nas plantas? ",
        alternativas: [
            {
                texto: " Absorver a luz solar para a fotossíntese",
                afirmacao: "A clorofila tem o papel fundamental de absorver a luz solar para o processo de fotossíntese, convertendo energia solar em energia química que a planta pode usar para crescer e se desenvolver."
            },
            {
                texto: "Regular o crescimento celular",
                afirmacao: "Embora o crescimento celular seja importante nas plantas, quem regula esse processo são hormônios vegetais como a auxina, e não a clorofila. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();