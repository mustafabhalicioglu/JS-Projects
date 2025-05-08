// First we select the elements that we will use from the HTML document
let diceDOM = document.querySelector(".dice");
let img1DOM = document.querySelector(".img1");
let img2DOM = document.querySelector(".img2");
let h1DOM = document.querySelector("h1");
let btnRefresh = document.querySelector(".btn");

// set image 6 to both images
img1DOM.setAttribute("src", "images/dice6.png");
img2DOM.setAttribute("src", "images/dice6.png");

btnRefresh.addEventListener("click", zarSalla);

function zarSalla() {
  // create a random number from 1 to 6

  var randomNumber1 = Math.ceil(Math.random() * 6);

  // Using this random number I set a random image from 1 to 6 to the left dice
  if (randomNumber1 === 1) {
    img1DOM.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    img1DOM.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    img1DOM.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    img1DOM.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    img1DOM.setAttribute("src", "images/dice5.png");
  } else if (randomNumber1 === 6) {
    img1DOM.setAttribute("src", "images/dice6.png");
  }

  // // I created a new random number for the second dice and Using this random number I set a random image from 1 to 6 to the left dice
  var randomNumber2 = Math.ceil(Math.random() * 6);

  if (randomNumber2 === 1) {
    img2DOM.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    img2DOM.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    img2DOM.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    img2DOM.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    img2DOM.setAttribute("src", "images/dice5.png");
  } else if (randomNumber2 === 6) {
    img2DOM.setAttribute("src", "images/dice6.png");
  }

  // Now to show which dice is winner we determine the conditions and change h1

  if (randomNumber1 === randomNumber2) {
    h1DOM.textContent = "Berabere!";
  } else if (randomNumber1 > randomNumber2) {
    h1DOM.textContent = "🚩 1. Oyuncu Kazandı";
  } else if (randomNumber1 < randomNumber2) {
    h1DOM.textContent = "2. Oyuncu Kazandı 🚩";
  }
}
// THERE IS ALSO SIMPLIER WAY OF THIS
// THE 2nd WAY:

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
