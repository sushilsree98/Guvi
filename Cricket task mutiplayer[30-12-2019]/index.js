const total1= document.querySelector(".team1");
const total2=document.querySelector(".team2");
const score1=document.querySelector(".score1");
const score2=document.querySelector(".score2");
const team1_button=document.querySelector(".team1_button");
const team2_button=document.querySelector(".team2_button");
let counter1=10,counter2=10,playerCount1=1,playerCount2=1,ballCount1=1,ballCount2=1;
let player1=[];//players in field
let playerBall1=[];//number of balls per player
let individualTotal1=0;
let playerScore1=[];// total score per player
let player2=[];
let playerBall2=[];
let individualTotal2=0;
let playerScore2=[];
let firstTeamTotal=[];// runs for each ball
let secondTeamTotal=[];
let a,b;//reduce function for each team
let wicket1=0,wicket2=0;


team1_button.addEventListener('click',getScore1);

function getScore1(){
  let x=Math.random();
  // let player1=[];
  //

  x=(x*10)%7;
  counter1--;
  let firstTeamScore = Math.floor(x);
  score1.innerHTML=firstTeamScore;

    if(counter1>0 && playerCount1<=10){
      ballCount1++;
      individualTotal1+=firstTeamScore;
      if(firstTeamScore===0 || ballCount1===7){
        if(firstTeamScore===0){
          wicket1++;
          document.querySelector(".wicket1").textContent="Wickets Fallen "+ wicket1;
        }
        playerScore1.push(individualTotal1);
        individualTotal1=0;
        player1.push(playerCount1);
        playerCount1++;
        playerBall1.push(ballCount1-1);
        ballCount1=1;
      }
       firstTeamTotal.push(firstTeamScore);
    }else{
      ballCount1++;
      individualTotal1+=firstTeamScore;
      playerScore1.push(individualTotal1);
      individualTotal1=0;
      player1.push(playerCount1);
      playerCount1++;
      playerBall1.push(ballCount1-1);
      ballCount1=1;
      firstTeamTotal.push(firstTeamScore);
       team1_button.removeEventListener('click',getScore1);
       team2_button.addEventListener('click',getScore2);
       document.querySelector(".buttonWinner").removeEventListener('click',winner);

    }



  console.log(firstTeamTotal);
  console.log(player1);
  console.log(playerBall1);
  console.log(playerScore1);
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

    if(counter2>0 && playerCount2<=10){
      if(secondTeamScore===0){
        wicket2++;
        document.querySelector(".wicket2").textContent="Wickets Fallen "+ wicket2;
      }
      ballCount2++;
      individualTotal2+=secondTeamScore;
      if(secondTeamScore===0 || ballCount2===7){
        playerScore2.push(individualTotal2);
        individualTotal2=0;
        player2.push(playerCount2);
        playerCount2++;
        playerBall2.push(ballCount2-1);
        ballCount2=1;
      }
       secondTeamTotal.push(secondTeamScore);
    }else{
      ballCount2++;
      individualTotal2+=secondTeamScore;
      playerScore2.push(individualTotal2);
      individualTotal2=0;
      player2.push(playerCount2);
      playerCount2++;
      playerBall2.push(ballCount2-1);
      ballCount2=1;
       team2_button.removeEventListener('click',getScore2);
       document.querySelector(".buttonWinner").addEventListener('click',winner);
      secondTeamTotal.push(secondTeamScore);
    }

  console.log(secondTeamTotal);
  console.log(player2);
  console.log(playerBall2);
  console.log(playerScore2);
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
  }else if (a===b) {
    document.querySelector(".winner").innerHTML="Match Draw ";
  }
  else{
    document.querySelector(".winner").innerHTML="Winner is Team 2";
  }

  localStorage.setItem("team1score",JSON.stringify(firstTeamTotal));
  localStorage.setItem("team2score",JSON.stringify(secondTeamTotal));
  localStorage.setItem("total1",JSON.stringify(a));
  localStorage.setItem("total2",JSON.stringify(b));
  localStorage.setItem("player1",JSON.stringify(player1));
  localStorage.setItem("playerBall1",JSON.stringify(playerBall1));
  localStorage.setItem("playerScore1",JSON.stringify(playerScore1));
  localStorage.setItem("player2",JSON.stringify(player2));
  localStorage.setItem("playerBall2",JSON.stringify(playerBall2));
  localStorage.setItem("playerScore2",JSON.stringify(playerScore2));


 setTimeout(function(){
   location.href="result.html";
 }, 3000);

}
