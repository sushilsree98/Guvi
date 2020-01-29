
let cnt=0;
let p=document.createElement("p");
let array=[],cache=[];
for(let i=0;i<14;i++){
  let button=document.createElement("input");
  button.setAttribute("name","switch");
  button.setAttribute("type","radio");
  button.innerHTML=`${i+1}`;
  document.body.appendChild(button);


  button.addEventListener('click',()=>{
    document.getElementById("tbody1").innerHTML="Loading...";


    let end=(i+1)*5;
    let start = end-5;
    console.log(i);
    if(array.indexOf(i)==-1){
      let api1=`https://5cdd0a92b22718001417c19d.mockapi.io/api/users?page=${i+1}&limit=5`;
      let table1=fetch(api1);
      table1
        .then((data1)=>{
            document.getElementById("tbody1").innerHTML=" ";
        return data1.json();
      })
        .then((result)=>{
          cache.push(result);
          array.push(i);
          // console.log(cache);
          // console.log(array);

          let ar=["id","realm","username","password","email"];
          // console.log(Object.keys(result).length);
          // console.log(Object.keys(result[0]).length);

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
    }else{
      document.getElementById("tbody1").innerHTML=" ";
      let result=cache[array.indexOf(i)];
      let ar=["id","realm","username","password","email"];
      // console.log(Object.keys(result).length);
      // console.log(Object.keys(result[0]).length);

    for(let i=0;i<Object.keys(result).length;i++){
      let tr1=document.createElement("tr");
      document.getElementById("tbody1").appendChild(tr1);
      for(let j=0;j<5;j++){
        let td1=document.createElement("td");
        tr1.appendChild(td1);
        td1.innerHTML=result[i][ar[j]];
      }
    }
    }


  });
}
