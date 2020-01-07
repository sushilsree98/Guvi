var obj={
  name:"Rajinikanth",
  age:33,
  hasPets:false,
};
let ar=[];
function printAllValues(obj){
  let i=0;
  for(let j in obj){
    ar[i]=obj[j];
    i++;
  }
  console.log(ar);
}

printAllValues(obj);
