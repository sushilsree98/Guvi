var game = /** @class */ (function () {
    function game(chance) {
        this.chance = chance;
    }
    game.prototype.image = function (count) {
        if (count % 2 == 0) {
            return "circle.png";
        }
        else {
            return "cross.jpg";
        }
    };
    game.prototype.create = function (cnt, pic) {
        var x = document.createElement("img");
        x.setAttribute("src", pic);
        document.querySelector(".col-" + cnt).appendChild(x);
    };
    game.prototype.compute = function (arr, ar1, ar2, gameChance) {
        for (var i = 0; i < arr.length; i++) {
            var cnt1 = 0, cnt2 = 0;
            for (var j = 0; j < arr[i].length; j++) {
                for (var k1 = 0; k1 < ar1.length; k1++) {
                    if (arr[i][j] === ar1[k1]) {
                        cnt1++;
                    }
                }
                for (var k2 = 0; k2 < ar1.length; k2++) {
                    if (arr[i][j] === ar2[k2]) {
                        cnt2++;
                    }
                }
            }
            if (cnt1 == 3) {
                document.querySelector("h1").innerHTML = "player1 wins";
            }
            else if (cnt2 == 3) {
                document.querySelector("h1").innerHTML = "player2 wins";
            }
            else if (gameChance == 9) {
                document.querySelector("h1").innerHTML = "Game draw";
            }
        }
    };
    return game;
}());
var button1 = document.querySelector(".col-1");
var button2 = document.querySelector(".col-2");
var button3 = document.querySelector(".col-3");
var button4 = document.querySelector(".col-4");
var button5 = document.querySelector(".col-5");
var button6 = document.querySelector(".col-6");
var button7 = document.querySelector(".col-7");
var button8 = document.querySelector(".col-8");
var button9 = document.querySelector(".col-9");
button1.addEventListener('click', player1);
button2.addEventListener('click', player2);
button3.addEventListener('click', player3);
button4.addEventListener('click', player4);
button5.addEventListener('click', player5);
button6.addEventListener('click', player6);
button7.addEventListener('click', player7);
button8.addEventListener('click', player8);
button9.addEventListener('click', player9);
var gamePlay = new game(1);
var gameChance = gamePlay.chance;
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7], [5, 7, 3], [7, 5, 3], [1, 3, 2], [3, 1, 2], [3, 2, 1], [6, 5, 4], [5, 6, 4], [5, 4, 6], [9, 8, 7], [9, 7, 8], [8, 9, 7], [7, 4, 1], [1, 7, 4], [7, 1, 4], [8, 5, 2], [8, 2, 5], [2, 8, 5]];
var ar1 = [];
var ar2 = [];
var newar1 = [];
var newar2 = [];
function player1() {
    var value = 1;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button1.removeEventListener('click', player1);
}
function player2() {
    var value = 2;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button2.removeEventListener('click', player2);
}
function player3() {
    var value = 3;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button3.removeEventListener('click', player3);
}
function player4() {
    var value = 4;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button4.removeEventListener('click', player4);
}
function player5() {
    var value = 5;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button5.removeEventListener('click', player5);
}
function player6() {
    var value = 6;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button6.removeEventListener('click', player6);
}
function player7() {
    var value = 7;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button7.removeEventListener('click', player7);
}
function player8() {
    var value = 8;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button8.removeEventListener('click', player8);
}
function player9() {
    var value = 9;
    gamePlay.create(value, gamePlay.image(gameChance));
    if (gameChance % 2 == 0) {
        ar2.push(value);
    }
    else {
        ar1.push(value);
    }
    gamePlay.compute(arr, ar1, ar2, gameChance);
    gameChance++;
    button9.removeEventListener('click', player9);
}
// if(ar1.length>=3 || ar2.length>=3){
//   let sar1=ar1.slice(-3);
//   newar1.push(sar1)
//   let sar2=ar2.slice(-3);
//   newar2.push(sar2)
// for (let i=0;i<arr.length;i++){
//   for(let j=0;j<newar1.length;j++){
//   if(JSON.stringify(arr[i])===JSON.stringify(newar1[j])||JSON.stringify(arr[i])===JSON.stringify(newar2[j]))
//   {
//     if(gameChance%2==0){
//       document.querySelector("h1").innerHTML="player2 wins";
//       button1.removeEventListener('click',player1);
//       button2.removeEventListener('click',player2);
//       button3.removeEventListener('click',player3);
//       button4.removeEventListener('click',player4);
//       button5.removeEventListener('click',player5);
//       button6.removeEventListener('click',player6);
//       button7.removeEventListener('click',player7);
//       button8.removeEventListener('click',player8);
//       button9.removeEventListener('click',player9);
//
//
//     }else{
//       document.querySelector("h1").innerHTML="player1 wins";
//       button1.removeEventListener('click',player1);
//       button2.removeEventListener('click',player2);
//       button3.removeEventListener('click',player3);
//       button4.removeEventListener('click',player4);
//       button5.removeEventListener('click',player5);
//       button6.removeEventListener('click',player6);
//       button7.removeEventListener('click',player7);
//       button8.removeEventListener('click',player8);
//       button9.removeEventListener('click',player9);
//     }
//   }
// }
//   }
//   if(ar1.length>3){
//     ar1.shift();
//   }
//   if(ar2.length>3){
//     ar2.shift();
//   }
//
// }
console.log(gameChance);
