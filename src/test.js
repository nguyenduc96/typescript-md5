var width;
var height;
width = 10;
height = 10;
var x = 'Duc dz';
var area = width * height;
console.log(area);
console.log(x);
var numbers = [1, 2, 3, 4, 5];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log('for of : ' + n);
}
for (var n in numbers) {
    console.log('for in : ' + n);
}
do {
    console.log(width);
} while (numbers.length > width);
numbers.forEach(function (number) {
    console.log(number);
});
numbers.forEach(function (number) { return console.log(number); });
var promise = new Promise(function (resolve, reject) {
    resolve("success");
    reject("error");
});
if (numbers.length > 5) {
    promise.then(function (message) { return console.log(message); });
}
else {
    promise.then(function (message) { return console.log(message); });
}
