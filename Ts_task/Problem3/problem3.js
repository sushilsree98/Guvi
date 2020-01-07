var obj = {
    name: "ISRO",
    age: 35,
    role: "Scientist"
};
var ar = [];
function convertObjectToList(obj) {
    var i = 0;
    for (var j in obj) {
        ar[i] = [j, obj[j]];
        i++;
    }
    console.log(ar);
}
convertObjectToList(obj);
