var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 10 };
function assertObjectsEqual(actual, expected) {
    var cnt = 0, len = 0;
    for (var key1 in actual) {
        for (var key2 in expected) {
            if (key1 == key2) {
                if (actual[key1] == expected[key2]) {
                    cnt++;
                }
            }
        }
        len++;
    }
    if (cnt === len) {
        console.log("True");
    }
    else {
        console.log("false");
    }
}
assertObjectsEqual(actual, expected);
