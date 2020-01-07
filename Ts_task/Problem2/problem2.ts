var obj = {
    name: "Rajinikanth",
    age: 33,
    hasPets: false
};
var ar = [];
function printAllValues(obj) {
    var i = 0;
    for (var j in obj) {
        ar[i] = j;
        i++;
    }
    console.log(ar);
}
printAllValues(obj);
