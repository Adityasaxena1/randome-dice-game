
var h1 = document.querySelector("h1");
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

image1.setAttribute('src', "./images/dice"+randomNumber1+".png");
image2.setAttribute('src', "./images/dice" + randomNumber2 + ".png");




if (randomNumber1>randomNumber2) {
    h1.innerText = "Player 1 Won 🚩";

} else if (randomNumber1<randomNumber2) {
    h1.innerText = "Player 2 Won 🚩";

} else {
    h1.innerText = "It's a draw!";

}