let quantCartas = 1;
const deck = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];


function startGame () {
    while((quantCartas % 2 !== 0) || (quantCartas > 14 ) || (quantCartas < 4) ){
        quantCartas = prompt("Bem vindo(a) ao Parrot Card Game!!\n\nCom qauntas cartas você quer jogar?");
    }
    createGame();
}
startGame();

function createGame () {
    document.querySelector("ul").innerHTML = "";
    for(let i = 0 ; i < quantCartas ; i++){
        document.querySelector("ul").innerHTML += `<li><img class="verso" src="img/${deck[i]}"><img src="img/front.png"></li>`;
    }
}