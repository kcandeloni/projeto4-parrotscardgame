const parrots = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let deck = [];
let jogadas;
let cartasSelect = [];
let quantCartas;
let contTimer;
let idInterval;
let escolha;

function startGame () {
    idInterval = setInterval(myTimer, 1000);
    quantCartas = 1;
    jogadas = 0;
    deck = [];
    liberaClick = true;
    contTimer = 0;
    while((quantCartas % 2 !== 0) || (quantCartas > 14 ) || (quantCartas < 4) ){
        quantCartas = prompt("Bem vindo(a) ao Parrot Card Game!!\n\nCom quantas cartas você quer jogar(de 4 até 14)?");
    }
    createDeack(quantCartas);
    createGame();
}

startGame();

function createDeack(quant) {
    parrots.sort(comparador);//modificar ordem da lista de papagaios, não é necessário, pórem vai mudar a ordem que escolhe as imagens para qauntidades < 14
    for(let i = 0 ; i < quant/2; i++){
        deck.push(parrots[i]);
        deck.push(parrots[i]);
    }
    deck.sort(comparador); // Após esta linha, a minhaArray estará embaralhada (função disponibilizda no notion)
}

// Esta função pode ficar separada do código acima, onde você preferir (função disponibilizda no notion)
function comparador() { 
	return Math.random() - 0.5; 
}

function createGame () {
    document.querySelector("ul").innerHTML = "";
    for(let i = 0 ; i < deck.length ; i++){
        document.querySelector("ul").innerHTML += `<li onclick="desvirarCarta(this);" class="verso"><img src="img/${deck[i]}"><img src="img/front.png"></li>`;
    }
}

function desvirarCarta (elemento) {
    if((elemento.classList.contains("virada") == false) && liberaClick){
        liberaClick = false;
        cartasSelect.push(elemento);
        elemento.classList.add("virada");
        endGame();
    }
}

function endGame () {
    jogadas++;
    if(document.querySelectorAll(".virada").length == quantCartas){
        setTimeout(finalizaGame, 1000);
    }
    verLance();
}

function verLance () {
    if(cartasSelect.length == 2){
        if(cartasSelect[0].querySelector("img").src !== cartasSelect[1].querySelector("img").src){
            setTimeout(versoCarta, 1000);
        }
        else {
            cartasSelect = [];  
            liberaClick = true;
        }
    }
    else {
        liberaClick = true;
    }
}

function versoCarta () {
    cartasSelect[0].classList.remove("virada");
    cartasSelect[1].classList.remove("virada");
    cartasSelect = [];
    liberaClick = true;
}

function finalizaGame () {
    clearInterval(idInterval);
    alert(`Você ganhou em ${jogadas} jogadas em ${contTimer} segundos!`);
    escolha = "éoq";
    while(escolha !== "não" && escolha !== "sim"){
        escolha = prompt("Deseja iniciar um novo jogo('sim' ou 'não')?");
    }
    if(escolha === "sim"){
        startGame();
    }
}

function myTimer() {
    contTimer++;
    document.querySelector(".time").innerHTML = `${contTimer}s`;
  }