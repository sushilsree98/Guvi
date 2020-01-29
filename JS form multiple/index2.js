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
subDiv1.style.backgroundColor="red";
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
let sum=0
for(let i=0;i<data.length;i++){
  let card=document.createElement("div");
  subDiv1.appendChild(card);
  // card.style.height="400px";
  card.style.width="250px";
  card.style.margin="5px";
  card.style.backgroundColor="#f6e7e6";
  let img=document.createElement("img");
  img.setAttribute("src","https://place-hold.it/250X250");
  card.appendChild(img);
  let cardDiv=document.createElement("form");
  card.appendChild(cardDiv)
  cardDiv.style.padding="0px 5px";
  for(let j=0;j<data[i].variants.length;j++){
    let select=document.createElement("select");
    cardDiv.appendChild(select);
    select.setAttribute("id",`select${i}${j}`)
    for(let k=0;k<data[i].variants[j]["values"].length;k++){
      let option=document.createElement("option");
      select.appendChild(option);
      option.setAttribute("value",data[i].variants[j]["values"][k]);
      option.innerHTML=data[i].variants[j]["values"][k];
    }

  }
  let valueAr=[],variantArray=[],cntAr=[];
  let submitButton=document.createElement("input");
  submitButton.setAttribute("type","submit");
  cardDiv.appendChild(submitButton);

  cardDiv.addEventListener('submit',()=>{
    event.preventDefault();
      for(let j=0;j<data[i].variants.length;j++){
        // console.log(document.getElementById(`select${i}${j}`).value);
        valueAr.push(document.getElementById(`select${i}${j}`).value);
      }
      console.log(valueAr);
      let variantLen=data[i].variants.length;
      for(let j=0;j<variantLen;j++){
        variantArray.push(data[i].variants[j].type);
      }
      console.log(variantArray,valueAr);
      for(let j=0;j<data[i].variantDetail.length;j++){
        let cnt=0;
        for(let k=0;k<variantArray.length;k++){
          if(data[i].variantDetail[j][data[i].variants[k].type]===valueAr[k]){//error
            cnt++;
          }
        }
        cntAr.push(cnt);
      }
      let price=cntAr.indexOf(data[i].variants.length);
      console.log(data[i].variantDetail[price]["price"]);
      let pricePara=document.createElement("h3");
      rightDiv.appendChild(pricePara);
      let x=parseInt(data[i].variantDetail[price]["price"]);
      pricePara.innerHTML=`${x+parseInt(data[i].basePrice)}`;
      sum+=parseInt(x)+parseInt(data[i].basePrice);
      finalTotal.innerHTML=sum+(sum*0.18);
  });

}
