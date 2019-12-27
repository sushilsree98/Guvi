const team_1= document.querySelector(".team_1");
const team_2= document.querySelector(".team_2");
let key1=window.localStorage.getItem("team1score");
let key2=window.localStorage.getItem("team2score");

  team_1.innerHTML="Total score of team1 " + window.localStorage.getItem("total1")+ key1;
  team_2.innerHTML="Total score of team2 " + window.localStorage.getItem("total2") + key2;
