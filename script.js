let quantCartas = 4;
const deck = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];


function startGame () {
    while((quantCartas % 2 !== 0) || (quantCartas > 14 ) || (quantCartas < 4) ){
        quantCartas = prompt("Bem vindo(a) ao Parrot Card Game!!\n\nCom qauntas cartas você quer jogar?");
    }
    createGame();
}
//startGame();
createGame();

function createGame () {
    document.querySelector("ul").innerHTML = "";
    for(let i = 0 ; i < quantCartas ; i++){
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