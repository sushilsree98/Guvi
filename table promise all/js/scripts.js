let api=["https://5cdd0a92b22718001417c19d.mockapi.io/api/users","https://5cdd0a92b22718001417c19d.mockapi.io/api/books","https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors",
"https://5cdd0a92b22718001417c19d.mockapi.io/api/products"];

let promises=api.map((ar)=> fetch(ar).then((data)=>data.json()));
Promise.all(promises).then((results)=>{
  console.log(results.length);

  let ar1=["id","realm","username","password","email"]
for(let i=0;i<Object.keys(results[0]).length;i++){

  let tr1=document.createElement("tr");
  document.getElementById("tbody1").appendChild(tr1);
  for(let j=0;j<5;j++){
    let td1=document.createElement("td");
    tr1.appendChild(td1);
    td1.innerHTML=results[0][i][ar1[j]];
  }
}

let ar2=["id","createdAt","name","cover","price","ISBN"]
// console.log(Object.keys(result2).length);
// console.log(Object.keys(result[0]).length);
for(let i=0;i<Object.keys(results[1]).length;i++){

let tr2=document.createElement("tr");
document.getElementById("tbody2").appendChild(tr2);
for(let j=0;j<6;j++){
  let td2=document.createElement("td");
  tr2.appendChild(td2);
  td2.innerHTML=results[1][i][ar2[j]];
}
}

let ar3=["id","createdAt","name","avatar"]

for(let i=0;i<Object.keys(results[2]).length;i++){

  let tr3=document.createElement("tr");
  document.getElementById("tbody3").appendChild(tr3);
  for(let j=0;j<4;j++){
    let td3=document.createElement("td");
    tr3.appendChild(td3);
    td3.innerHTML=results[2][i][ar3[j]];
  }
}


let ar4=["id","productName","price","image"];

for(let i=0;i<Object.keys(results[3]).length;i++){

  let tr4=document.createElement("tr");
  document.getElementById("tbody4").appendChild(tr4);
  for(let j=0;j<4;j++){
    let td4=document.createElement("td");
    tr4.appendChild(td4);
    td4.innerHTML=results[3][i][ar4[j]];
  }
}

})
