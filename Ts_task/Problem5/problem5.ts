var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {}
 for(let[key,value] of arr){
   newObject[key]=value;
 }
 console.log(JSON.stringify(newObject));
}

fromListToObject(arr);
