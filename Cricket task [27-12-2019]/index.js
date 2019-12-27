const total1= document.querySelector(".team1");
const total2=document.querySelector(".team2");
const score1=document.querySelector(".score1");
const score2=document.querySelector(".score2");
const team1_button=document.querySelector(".team1_button");
const team2_button=document.querySelector(".team2_button");
const startgame=document.querySelector(".startgame");
let counter1=30,counter2=30,playerCount1=10,playerCount2=10;
let playerRun1=[];
let playerRun2=[];
let firstTeamTotal=[];
let secondTeamTotal=[];
let a,b;//reduce function for each team


team1_button.addEventListener('click',getScore1);
team2_button.addEventListener('click',getScore2);
document.querySelector(".buttonWinner").addEventListener('click',winner);

function getScore1(){
  let x=Math.random();
  let player1=[];
  let playerScore=[];

  x=(x*10)%7;
  counter1--;
  let firstTeamScore = Math.floor(x);
  score1.innerHTML=firstTeamScore;
  (function(){
    if(counter1>0){
      return firstTeamTotal.push(firstTeamScore);
    }else{
      return team1_button.removeEventListener();
    }
  }
)();
  console.log(firstTeamTotal);
   a=firstTeamTotal.reduce(function(total,num){
    return total+num;
  });
  total1.innerHTML="Total Score of Team1 " + a;

}

function getScore2(){
  let y=Math.random();

  y=(y*10)%7;
  counter2--;
  let secondTeamScore = Math.floor(y);
  score2.innerHTML=secondTeamScore;
//to count the players and overs per player
    if(counter2>0){
       secondTeamTotal.push(secondTeamScore);
    }else{
       team2_button.removeEventListener();
    }

  console.log(secondTeamTotal);
   b=secondTeamTotal.reduce(function(total,num){
    return total+num;
  });
  total2.innerHTML="Total Score of Team2 " + b;

}

function winner(){
  if(a>b){
    document.querySelector(".winner").innerHTML="winner is Team 1";
  }else if(b==undefined){
    document.querySelector(".winner").innerHTML=" ";
  }else{
    document.querySelector(".winner").innerHTML="Winner is Team 2";
  }

  localStorage.setItem("team1score",JSON.stringify(firstTeamTotal));
  localStorage.setItem("team2score",JSON.stringify(secondTeamTotal));
  localStorage.setItem("total1",JSON.stringify(a));
  localStorage.setItem("total2",JSON.stringify(b));

 setTimeout(function(){
   location.href="result.html";
 }, 5000);

}
