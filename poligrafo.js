let perguntas = [
    /* 1 */ "Você estava na sala quando a carteira desapareceu?",
    /* 2 */ "Você entrou na sala no horário em que ocorreu o furto?",
    /* 3 */ "Você viu alguém mexendo na carteira?",
    /* 4 */ "Você viu alguém sair da sala com uma carteira?",
    /* 5 */ "Você conhece o dono da carteira?",
    /* 6 */ "Você sabe onde o dono costuma guardar a carteira?",
    /* 7 */ "Você viu alguém usando uma camisa preta sair da sala?",
    /* 8 */ "Você viu alguém usando calça jeans perto do local da carteira?",
    /* 9 */ "Você sabe quem pegou a carteira?",
    /* 10 */ "Você conhece a pessoa apontada como principal suspeita?"
];
 
let respostas = [];
let atual = 0;
 
mostrarPergunta();
 
function mostrarPergunta() {
    document.getElementById("pergunta").innerHTML = perguntas[atual];
    document.getElementById("numero").innerHTML =
        "Pergunta " + (atual + 1) + " de " + perguntas.length;
}
 
function responder() {
    let resposta = document.getElementById("resposta").value;
 
    if (resposta == "") {
        alert("Escolha Sim ou Não para continuar!");
        return;
    }
 
    respostas[atual] = resposta;
    atual++;
 
    document.getElementById("resposta").value = "";
 
    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        resultado();
    }
}
 
function resultado() {
    let quantidadeSim = 0;
 
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == "sim") {
            quantidadeSim++;
        }
    }
 
    let classificacao = "";
    let mensagem = "";
 
    if (quantidadeSim <= 4) {
        classificacao = "INOCENTE";
        mensagem = "Não foram identificados indícios suficientes pelo critério desta investigação.";
    } else if (quantidadeSim == 5) {
        classificacao = "SUSPEITO";
        mensagem = "As respostas levantaram suspeitas. A investigação deve continuar.";
    } else if (quantidadeSim <= 8) {
        classificacao = "CÚMPLICE";
        mensagem = "A quantidade de respostas afirmativas exige uma investigação mais aprofundada.";
    } else {
        classificacao = "CULPADO";
        mensagem = "O resultado da investigação aponta alto nível de suspeita.";
    }
 
    document.getElementById("pergunta").innerHTML =
        "Resultado da investigação";
 
    document.getElementById("numero").innerHTML =
        "Fim do interrogatório";
 
    document.getElementById("resultado").innerHTML =
        "Respostas Sim: " + quantidadeSim + " de " + perguntas.length + "<br>" +
        "Classificação: " + classificacao + "<br><br>" +
        mensagem;
 
    document.getElementById("resposta").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}
 
function reiniciarJogo() {
    location.reload();
}