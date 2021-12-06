
var player1=window.prompt("enter the name of Player 1 :");
var player2=window.prompt("enter the name of Player 2 :");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = player1 +" Wins! 🎉";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = player2 + " Wins! 🎉";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;