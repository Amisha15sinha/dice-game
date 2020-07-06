var player1="Player 1";
var player2="Player 2";

function editNames()
{
  player1=prompt("Enter Player1 name:");
  player2=prompt("Enter Player2 name:");


  document.querySelector("p.Player1").innerHTML= player1;
  document.querySelector("p.Player2").innerHTML= player2;
}


function refreshMe()
{
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;//1-6

var randomDiceImage="dice" + randomNumber1 + ".png";//dice1.png-dice6.png

var randomImageSource="images/" + randomDiceImage; //images/dice1.png-iages/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomImageSource2="images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=(player2 + " wins!🚩");

}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=("🚩" + player1 + " Wins!");
}
else
{
  document.querySelector("h1").innerHTML="Draw!🤝";
}
}
