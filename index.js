var dice = document.lastElementChild.querySelectorAll("img")

for (var i = 0; i < dice.length; i++) {
    var ranNum = Math.floor(Math.random() * 6) + 1;
    dice[i].setAttribute("src", ("./images/dice" + ranNum + ".png"));
}

var title = document.querySelector("h1");

if (parseInt(dice[0].getAttribute("src").slice(13, 14)) > parseInt(dice[1].getAttribute("src").slice(13, 14))) {
    title.innerHTML = "Player 1 Wins!";

} else if (parseInt(dice[0].getAttribute("src").slice(13, 14)) < parseInt(dice[1].getAttribute("src").slice(13, 14))) {
    title.innerHTML = "Player 2 Wins!";
} else {
    title.innerHTML = "Draw!";
}
