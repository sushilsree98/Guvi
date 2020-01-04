for(let i=1;i<=10;i++){
  let x=document.createElement("div");
  x.setAttribute("class","col-3 col-md-4 col-sm-6 mainDiv");
  x.setAttribute("style","width:13rem;");
  x.innerHTML="<div class=\"card\" style=\"width: 13rem;\">"+"<img src=\"...\" class=\"card-img-top\" alt=\"...\">"+
  "<div class=\"card-body\">" + "<h5 class=\"card-title\">Player "+i +"</h5>"+"<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>"+
  "<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a></div>";
  document.querySelector(".row").appendChild(x);
}
