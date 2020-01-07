var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var _a = arr_1[_i], key = _a[0], value = _a[1];
        newObject[key] = value;
    }
    console.log(JSON.stringify(newObject));
}
fromListToObject(arr);
