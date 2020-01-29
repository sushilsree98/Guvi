
let type=[],values=[],variants=[],varientDetails=[],newAr=[],variantInfo=[],result=[], finalResult=[],variantType=[];
let cnt=0

let createProduct=document.createElement("button");
cnt++;
createProduct.innerHTML="Create Product";
document.body.appendChild(createProduct);
createProduct.addEventListener('click',()=>{
  let finalDiv=document.createElement("div");
  document.body.appendChild(finalDiv);
  let div=document.createElement("div")
  let mainForm=document.createElement("FORM");
  mainForm.setAttribute("id","mainForm");
  finalDiv.appendChild(div);
  div.appendChild(mainForm);
  let addField=document.createElement("button");
  div.appendChild(addField);
  addField.innerHTML="Add variant";
  div.classList.add("mainDiv");
  let val=0;
  let basePrice=document.createElement("label");
  basePrice.innerHTML="Set basePrice";
  mainForm.appendChild(basePrice);
  let productValue=document.createElement("input");
  mainForm.appendChild(productValue);
  let formDiv=document.createElement("div");
  mainForm.appendChild(formDiv);
  let subFields=document.createElement("button");
  finalDiv.appendChild(subFields);
  subFields.innerHTML="Add sub fields";
  let subDiv=document.createElement("div");
  subDiv.classList.add("subDiv");
  finalDiv.appendChild(subDiv);
  let subForm=document.createElement("FORM");
  subDiv.appendChild(subForm);
  let secondFormDiv=document.createElement("div");
  subForm.appendChild(secondFormDiv);
  addField.addEventListener("click",()=>{
    val+=1;
    let variantLabel=document.createElement("input");
    variantLabel.setAttribute("type","text");
    variantLabel.setAttribute("placeholder","Enter the Type");
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
      let cnt=0;
      type.push(variantLabel.value);
      values.push(createVariant.value.split(','));
      createJSON(type,values);
      console.log(variants.length);
      let len=varientDetails.length;
      for(let i=0;i<len;i++){
        if(variants.length!=Object.keys(varientDetails[i]).length){
          cnt++;
        }
      }
      for(let i=0;i<cnt;i++){
        varientDetails.shift();
      }
      variantInfo=varientDetails;
      varientDetails=[];
      variantType=variants;
      variants=[];
    });

  });

  function createJSON(type,values){
let x={};
    for(let i=0;i<type.length;i++){

      x["type"]=type[i];
      x["values"]=values[i];
      variants.push(x);
      x={};
    }
    variants=variants.slice(-val);
    let ar=[],ar1=[];
    for(let i=0;i<variants.length;i++){
      ar.push(variants[i].values);
      ar1.push(variants[i].type);
    }

    console.log(variants);
    console.log(ar,ar1);
    newAr=cartesian.apply(null,ar);
    console.log(newAr);
    for(let i=0;i<newAr.length;i++){
      let y={};
      for(let j=0;j<newAr[i].length;j++){
        y[ar1[newAr[i].indexOf(newAr[i][j])]]=newAr[i][j];
      }
      varientDetails.push(y);
    }
    ar=[];
    ar1=[];
  }


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
        console.log(variantInfo);
      });
    }//for loop ends

  });

  function cartesian() {
    let r = [], arg = arguments, max = arg.length-1;
    function helper(arr, i) {
      for (let j=0, l=arg[i].length; j<l; j++) {
        let a = arr.slice(0); // clone arr
        a.push(arg[i][j]);
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

  finalButton.addEventListener('click',()=>{
    let final={};
    final["basePrice"]=productValue.value;
    final["variantDetail"]=variantInfo;
    final["variants"]=variantType;
    result.push(final);
    console.log(final);
    window.localStorage.setItem("data",JSON.stringify(result));
    window.localStorage.setItem("combo",JSON.stringify(newAr));
  });

});


let frontEnd=document.createElement("button");
document.body.appendChild(frontEnd);
frontEnd.innerHTML="view frontEnd";
frontEnd.addEventListener('click',()=>{
  window.location.href="front.html";
});
