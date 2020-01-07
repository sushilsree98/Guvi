var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var ar = [], i = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var key1 = arr_1[_i];
        var obj = {};
        for (var _a = 0, key1_1 = key1; _a < key1_1.length; _a++) {
            var _b = key1_1[_a], key2 = _b[0], value2 = _b[1];
            obj[key2] = value2;
        }
        ar[i] = obj;
        i++;
    }
    console.log(JSON.stringify(ar));
    //Your code
}
transformEmployeeData(arr);
