let api1="https://5cdd0a92b22718001417c19d.mockapi.io/api/users";
let api2="https://5cdd0a92b22718001417c19d.mockapi.io/api/books";
let api3="https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors";
let api4="https://5cdd0a92b22718001417c19d.mockapi.io/api/products";
let table1=fetch(api1);
table1
  .then((data1)=>{
  return data1.json();
})
  .then((result)=>{
    // console.log(result);
    let ar=["id","realm","username","password","email"]
    console.log(Object.keys(result).length);
    console.log(Object.keys(result[0]).length);
  for(let i=0;i<Object.keys(result).length;i++){

    let tr1=document.createElement("tr");
    document.getElementById("tbody1").appendChild(tr1);
    for(let j=0;j<5;j++){
      let td1=document.createElement("td");
      tr1.appendChild(td1);
      td1.innerHTML=result[i][ar[j]];
    }
  }
})
  .catch((err)=>{
  console.log(err);
});

let table2=fetch(api2);
table2
  .then((data2)=>{
  return data2.json();
})
  .then((result2)=>{
    // console.log(result);
    let ar=["id","createdAt","name","cover","price","ISBN"]
    // console.log(Object.keys(result2).length);
    // console.log(Object.keys(result[0]).length);
  for(let i=0;i<Object.keys(result2).length;i++){

    let tr2=document.createElement("tr");
    document.getElementById("tbody2").appendChild(tr2);
    for(let j=0;j<6;j++){
      let td2=document.createElement("td");
      tr2.appendChild(td2);
      td2.innerHTML=result2[i][ar[j]];
    }
  }
})
  .catch((err)=>{
  console.log(err);
});

let table3=fetch(api3);
table3
  .then((data3)=>{
  return data3.json();
})
  .then((result3)=>{
    // console.log(result);
    let ar=["id","createdAt","name","avatar"]
    // console.log(Object.keys(result2).length);
    // console.log(Object.keys(result[0]).length);
  for(let i=0;i<Object.keys(result3).length;i++){

    let tr3=document.createElement("tr");
    document.getElementById("tbody3").appendChild(tr3);
    for(let j=0;j<4;j++){
      let td3=document.createElement("td");
      tr3.appendChild(td3);
      td3.innerHTML=result3[i][ar[j]];
    }
  }
})
  .catch((err)=>{
  console.log(err);
});


let table4=fetch(api4);
table4
  .then((data4)=>{
  return data4.json();
})
  .then((result4)=>{
    // console.log(result);
    let ar=["id","productName","price","image"];
    // console.log(Object.keys(result2).length);
    // console.log(Object.keys(result[0]).length);
  for(let i=0;i<Object.keys(result4).length;i++){

    let tr4=document.createElement("tr");
    document.getElementById("tbody4").appendChild(tr4);
    for(let j=0;j<4;j++){
      let td4=document.createElement("td");
      tr4.appendChild(td4);
      td4.innerHTML=result4[i][ar[j]];
    }
  }
})
  .catch((err)=>{
  console.log(err);
});
