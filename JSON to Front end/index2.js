let data=JSON.parse(window.localStorage.getItem("data"));
let combo=JSON.parse(window.localStorage.getItem("combo"));
console.log(data);
let mainDiv=document.createElement("div");
mainDiv.style.width=screen.width;
// mainDiv.style.height="400px";
document.body.appendChild(mainDiv);
mainDiv.style.display="flex";
let subDiv1=document.createElement("div");
mainDiv.appendChild(subDiv1);
subDiv1.style.height="100%";
subDiv1.style.width="70%";
// subDiv1.style.backgroundColor="red";
let subDiv2=document.createElement("div");
mainDiv.appendChild(subDiv2);
subDiv2.style.width="30%";
// subDiv2.style.backgroundColor="blue";
let rightDiv=document.createElement("div");
subDiv2.appendChild(rightDiv);
rightDiv.style.padding="30px 50px";
let totalDiv=document.createElement("div");
subDiv2.appendChild(totalDiv);
totalDiv.style.padding="30px 50px"
let gst=document.createElement("h2");
gst.innerHTML="Tax --------------- 18%GST";
totalDiv.appendChild(gst);
let finalTotal=document.createElement("h2");
totalDiv.appendChild(finalTotal);
mainDiv.style.padding="5px";
subDiv1.style.display="flex";
subDiv1.style.flexWrap="wrap";
let button;
let totalCash=0;
for(let i=0;i<data.variantDetail.length;i++){
  let card=document.createElement("div");
  subDiv1.appendChild(card);
  // card.style.height="400px";
  card.style.width="250px";
  card.style.margin="5px";
  card.style.backgroundColor="#f6e7e6";
  let img=document.createElement("img");
  img.setAttribute("src","https://place-hold.it/250X250");
  card.appendChild(img);
  let cardDiv=document.createElement("div");
  card.appendChild(cardDiv)
  cardDiv.style.padding="0px 5px";
  for(let j=0;j<data.variants.length;j++){
    let h3=document.createElement("h3");
    cardDiv.appendChild(h3);
    h3.style.display="inline-block";
    h3.innerHTML=data.variants[j].type;
    h3.style.margin="3px 0";
    let p1= document.createElement("p");
    p1.style.margin="3px 0";
    cardDiv.appendChild(p1);
    p1.innerHTML="  :  "+data.variantDetail[i][data.variants[j].type];
    p1.style.display="inline-block";
    if(j===data.variants.length-1){
      let h1=document.createElement("h1");
      cardDiv.appendChild(h1);
      let price=parseInt(data.variantDetail[i].price)+parseInt(data.basePrice);
      h1.innerHTML="$  "+price;
      button=document.createElement("button");
      button.innerHTML="Add to cart";
      button.setAttribute("id",i);
      button.style.marginLeft="40%";
      button.style.marginBottom="10px";
      button.addEventListener('click',()=>{
        let info=document.createElement("h2");
        let val=parseInt(data.variantDetail[i].price)+parseInt(data.basePrice)
        info.innerHTML=combo[i]+"---------------------"+val;
        rightDiv.appendChild(info);
        totalCash+=parseInt(data.variantDetail[i].price)+parseInt(data.basePrice);
        console.log(totalCash);
        console.log(event.target.id);
        finalTotal.innerHTML=`total ------------------ ${totalCash+(totalCash*(18/100))}`;
      })
      cardDiv.appendChild(button);
    }
    let br=document.createElement("br");
    cardDiv.appendChild(br);
  }
}
