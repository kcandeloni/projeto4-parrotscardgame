const parrot = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let deck = [];

function startGame () {
    let quantCartas = 1;
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
    elemento.classList.toggle("virada");
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