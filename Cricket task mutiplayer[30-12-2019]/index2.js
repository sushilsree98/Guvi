const team_1= document.querySelector(".team_1");
const team_2= document.querySelector(".team_2");
let key1=window.localStorage.getItem("team1score");
let key2=window.localStorage.getItem("team2score");
let player1=localStorage.getItem("player1");
let playerBall1=localStorage.getItem("playerBall1");
let playerScore1=localStorage.getItem("playerScore1");
let player2= localStorage.getItem("player2");
let playerBall2=localStorage.getItem("playerBall2");
let playerScore2=localStorage.getItem("playerScore2");
player1=JSON.parse(player1);
playerBall1=JSON.parse(playerBall1);
playerScore1=JSON.parse(playerScore1);
player2=JSON.parse(player2);
playerBall2=JSON.parse(playerBall2);
playerScore2=JSON.parse(playerScore2);



team_1.innerHTML="Total score of team1 (" + window.localStorage.getItem("total1")+") <br> Runs per ball" + key1;
team_2.innerHTML="Total score of team2 (" + window.localStorage.getItem("total2") +")<br> Runs per ball" + key2;

for(let i=0;i<player1.length;i++){
  let x=document.createElement("tbody");
  x.innerHTML="<tr><th scope=\"row\">player "+player1[i]+"</th><td>"+ playerScore1[i]+"("+ playerBall1[i]+")</td></tr>";
  document.querySelector(".table1").appendChild(x);
}

for(let i=0;i<player2.length;i++){
  let x=document.createElement("tbody");
  x.innerHTML="<tr><th scope=\"row\">player "+player2[i]+"</th><td>"+ playerScore2[i]+"("+ playerBall2[i]+")</td></tr>";
  document.querySelector(".table2").appendChild(x);
}


// window.localStorage.clear();
