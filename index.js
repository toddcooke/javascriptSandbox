var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evens = arr.filter(function (i) { return i % 2 == 0; });
function namedFunction() { }
var anonymousFunction = function () { };
var aClass = /** @class */ (function () {
    function aClass() {
    }
    return aClass;
}());
console.log(evens);
