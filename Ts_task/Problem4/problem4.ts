var arr = ["GUVI", "I", "am", "a", "geek"];
function transformFirstAndLast(arr) {
  arr.splice(1,3);
  let obj=JSON.parse(`{"${arr[0]}":"${arr[1]}"}`);
  console.log(obj);

}
transformFirstAndLast(arr);
