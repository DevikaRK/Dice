var x = Math.random();
var randomNumber1 = Math.floor(x * 6) + 1;

if(randomNumber1===1){
  document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2){
  document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4){
  document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(randomNumber1===5){
  document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}

var y = Math.random();
var randomNumber2 = Math.floor(y * 6) + 1;
var randomImageSource = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else if(randomNumber1=randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
