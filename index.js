var random1 = Math.floor(Math.random() * 6) + 1;

var diceImg1 = "dice" + random1 +".png";

var srcImg1 = "images/" + diceImg1;

document.querySelectorAll("img")[0].setAttribute("src",srcImg1);

var random2 = Math.floor(Math.random() * 6) + 1;

var diceImg2 = "dice" + random2 +".png";

var srcImg2 = "images/" + diceImg2;

document.querySelectorAll("img")[1].setAttribute("src",srcImg2);

if(random1 > random2){
  document.querySelector("h1").innerHTML = "⛳ Player 1 Wins!";
}
else if(random1 < random2){
  document.querySelector("h1").innerHTML ="Player 2 Wins! ⛳";
}
else{
  document.querySelector("h1").innerHTML = "Draw! 🤝";
}
