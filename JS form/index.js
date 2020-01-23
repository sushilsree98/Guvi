let div=document.createElement("div")
let mainForm=document.createElement("FORM");
mainForm.setAttribute("id","mainForm");
document.body.appendChild(div);
div.appendChild(mainForm);
let addField=document.createElement("button");
div.appendChild(addField);
addField.innerHTML="Add variant";
div.classList.add("mainDiv");
let val=0;
let formDiv=document.createElement("div");
mainForm.appendChild(formDiv);
let type=[],values=[],variants=[],varientDetails=[],newAr=[],variantInfo=[];
let subFields=document.createElement("button");
document.body.appendChild(subFields);
subFields.innerHTML="Add sub fields"



addField.addEventListener("click",()=>{
  val+=1;
  // console.log(val);
  let variantLabel=document.createElement("input");
  variantLabel.setAttribute("type","text");
  variantLabel.setAttribute("placeholder","Enter the Type")
  formDiv.appendChild(variantLabel);
  let createVariant=document.createElement("input");
  createVariant.setAttribute("type","text");
  formDiv.appendChild(createVariant);
  let brk=document.createElement("BR");
  formDiv.appendChild(brk);


  if(val==1){
    let FirstFormSubmit = document.createElement("input");
    FirstFormSubmit.setAttribute("type","submit");
    mainForm.appendChild(FirstFormSubmit);
  }
  mainForm.addEventListener('submit',()=>{
    event.preventDefault();
    type.push(variantLabel.value);
    values.push(createVariant.value.split(','));
    createJSON(type,values);
    console.log();
    // console.log(Object.keys(varientDetails.slice(varientDetails.length-Math.pow(2,val))[0]).length);
    variantInfo=varientDetails.slice(varientDetails.length-Math.pow(2,val));
    // console.log(variantInfo);
  });

});

function createJSON(type,values){

  for(let i=0;i<type.length;i++){
    let x={};
    x["type"]=type[i];
    x["values"]=values[i];
    variants.push(x);
  }
  variants=variants.slice(-val);
  let ar=[],ar1=[];
  for(let i=0;i<variants.length;i++){
    ar.push(variants[i].values);
    ar1.push(variants[i].type);
  }

  console.log(variants);
  // console.log(ar,ar1);
  newAr=cartesian.apply(null,ar);
  console.log(newAr);
  for(let i=0;i<newAr.length;i++){
    let y={};
    for(let j=0;j<newAr[i].length;j++){
      y[ar1[newAr[i].indexOf(newAr[i][j])]]=newAr[i][j];
    }
    varientDetails.push(y);
  }
}

let subDiv=document.createElement("div");
document.body.appendChild(subDiv);
let subForm=document.createElement("FORM");
subDiv.appendChild(subForm);
let secondFormDiv=document.createElement("div");
subForm.appendChild(secondFormDiv);
// let buttonDiv=document.createElement("div");
// subForm.appendChild(buttonDiv);

subFields.addEventListener('click',()=>{
  console.log(newAr);
let createVariant=new Array(newAr.length);
let priceArray=[];
let variantLabel1;
  for(let i=0;i<newAr.length;i++){
    let variantLabel=document.createElement("label");
    variantLabel.innerHTML=`${newAr[i]}`;
    secondFormDiv.appendChild(variantLabel);
    variantLabel1=document.createElement("label");
    variantLabel1.innerHTML=`Price`;
    secondFormDiv.appendChild(variantLabel1);
    createVariant[i]=document.createElement("input");
    createVariant[i].setAttribute("type","text");
    secondFormDiv.appendChild(createVariant[i]);
    let brk=document.createElement("BR");
    secondFormDiv.appendChild(brk);
    if(i==0){
      let secondFormSubmit = document.createElement("input");
      secondFormSubmit.setAttribute("type","submit");
      subForm.appendChild(secondFormSubmit);
    }

    subForm.addEventListener('submit',()=>{
      event.preventDefault();
      priceArray.push(createVariant[i].value);
      console.log(priceArray);
      for(let i=0;i<variantInfo.length;i++){
         variantInfo[i]["price"]=priceArray[i];
      }
      // console.log(variantInfo);
    });
  }//for loop ends

});

function cartesian() {
  let r = [], arg = arguments, max = arg.length-1;
  function helper(arr, i) {
      for (let j=0, l=arg[i].length; j<l; j++) {
          let a = arr.slice(0); // clone arr
          a.push(arg[i][j])
          if (i==max) {
              r.push(a);
          } else
              helper(a, i+1);
      }
  }
  helper([], 0);
  return r;
}

let finalButton=document.createElement("button");
document.body.appendChild(finalButton);
finalButton.innerHTML="Get JSON";
let final={};
finalButton.addEventListener('click',()=>{
  final["variantDetail"]=variantInfo;
  final["variants"]=variants;
  console.log(final);
});
