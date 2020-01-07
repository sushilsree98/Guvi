var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
  let ar=[],i=0;
 for(const key1 of arr){
   let obj={};
   for(const [key2,value2] of key1){
     obj[key2]=value2;
   }
   ar[i]=obj;
   i++;
 }
 console.log(JSON.stringify(ar));

 //Your code

}

transformEmployeeData(arr);
