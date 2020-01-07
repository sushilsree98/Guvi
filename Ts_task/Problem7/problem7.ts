var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 10};
function assertObjectsEqual(actual, expected){
  let cnt=0,len=0;
for (let key1 in actual){
  for(let key2 in expected){
    if(key1==key2){
      if(actual[key1]==expected[key2]){
        cnt++;
      }
    }
  }
  len++;
}
if(cnt===len){
  console.log("True");
}else{
  console.log("false");
}
}

assertObjectsEqual(actual,expected);
