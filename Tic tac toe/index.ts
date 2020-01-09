class game{
  chance;
  constructor(chance:number){
    this.chance=chance;
  }

  image(count:number){
    if(count%2==0){
      return "circle.png";
    }else{
      return "cross.jpg";
    }
  }
  create(cnt,pic){
    let x=document.createElement("img");
    x.setAttribute("src",pic);
    document.querySelector(`.col-${cnt}`).appendChild(x);
  }
  compute(arr,ar1,ar2,gameChance){
    for(let i=0;i<arr.length;i++){
      let cnt1=0,cnt2=0;
      for(let j=0;j<arr[i].length;j++){
        for(let k1=0;k1<ar1.length;k1++){
          if(arr[i][j]===ar1[k1]){
            cnt1++;
          }
        }
        for(let k2=0;k2<ar1.length;k2++){
          if(arr[i][j]===ar2[k2]){
            cnt2++;
          }
        }
      }
      if(cnt1==3){
        document.querySelector("h1").innerHTML="player1 wins";
      }
      else if(cnt2==3){
        document.querySelector("h1").innerHTML="player2 wins";
      }
    }
  }
}
let button1=document.querySelector(".col-1");
let button2=document.querySelector(".col-2");
let button3=document.querySelector(".col-3");
let button4=document.querySelector(".col-4");
let button5=document.querySelector(".col-5");
let button6=document.querySelector(".col-6");
let button7=document.querySelector(".col-7");
let button8=document.querySelector(".col-8");
let button9=document.querySelector(".col-9");

button1.addEventListener('click',player1);
button2.addEventListener('click',player2);
button3.addEventListener('click',player3);
button4.addEventListener('click',player4);
button5.addEventListener('click',player5);
button6.addEventListener('click',player6);
button7.addEventListener('click',player7);
button8.addEventListener('click',player8);
button9.addEventListener('click',player9);


let gamePlay = new game(1);
let gameChance=gamePlay.chance;
let arr=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],[5,7,3],[7,5,3],[1,3,2],[3,1,2],[3,2,1],[6,5,4],[5,6,4],[5,4,6],[9,8,7],[9,7,8],[8,9,7],[7,4,1],[1,7,4],[7,1,4],[8,5,2],[8,2,5],[2,8,5]];
let ar1=[];
let ar2=[];
let newar1=[];
let newar2=[];

function player1(){
  let value=1;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button1.removeEventListener('click',player1);
}

function player2(){
  let value=2;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button2.removeEventListener('click',player2);
}
function player3(){
  let value=3;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button3.removeEventListener('click',player3);
}
function player4(){
  let value=4;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button4.removeEventListener('click',player4);
}
function player5(){
  let value=5;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button5.removeEventListener('click',player5);
}
function player6(){
  let value=6;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button6.removeEventListener('click',player6);
}
function player7(){
  let value=7;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button7.removeEventListener('click',player7);
}
function player8(){
  let value=8;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button8.removeEventListener('click',player8);
}
function player9(){
  let value=9;
  gamePlay.create(value,gamePlay.image(gameChance));
  if(gameChance%2==0){
    ar2.push(value)
  }else{
    ar1.push(value);
  }
  gamePlay.compute(arr,ar1,ar2,gameChance);
  gameChance++;
  button9.removeEventListener('click',player9);
}
