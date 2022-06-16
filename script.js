const parrot = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let deck = [];
let jogadas;
let cartasSelect = [];
let quantCartas;

function startGame () {
    quantCartas = 1;
    jogadas = 0;
    deck = [];
    liberaClick = true;
    while((quantCartas % 2 !== 0) || (quantCartas > 14 ) || (quantCartas < 4) ){
        quantCartas = prompt("Bem vindo(a) ao Parrot Card Game!!\n\nCom qauntas cartas você quer jogar(de 4 até 14)?");
    }
    createDeack(quantCartas);
    createGame();
}

startGame();

function createDeack(quant) {
    for(let i = 0 ; i < quant/2; i++){
        deck.push(parrot[i]);
        deck.push(parrot[i]);
    }
    deck.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
}

// Esta função pode ficar separada do código acima, onde você preferir
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
    alert(`Você ganhou em ${jogadas} jogadas!`);
}

/*
<!DOCTYPE html>
<html>
<body>

<h1>The Window Object</h1>
<h2>The setInterval() Method</h2>

<p id="demo"></p>

<script>
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
</script>

</body>
</html>
*/