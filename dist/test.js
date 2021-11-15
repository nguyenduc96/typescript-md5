let width;
let height;
width = 10;
height = 10;
let x = 'Duc dz';
let area = width * height;
console.log(area);
console.log(x);
let numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
    console.log('for of : ' + n);
}
for (let n in numbers) {
    console.log('for in : ' + n);
}
do {
    console.log(width);
} while (numbers.length > width);
numbers.forEach(function (number) {
    console.log(number);
});
numbers.forEach(number => console.log(number));
let number1 = 1;
let number2 = 2;
let promise = new Promise((resolve, reject) => {
    if (number1 == number2) {
        resolve("1=1");
    }
    else {
        reject("1>1");
    }
});
promise.then(message => console.log(message)).then(() => console.log("hello"))
    .catch(message => new Promise((resolve, reject) => {
    if (message.length < 2) {
        resolve("ok");
    }
    else {
        reject("khong ok");
    }
})).catch((m) => console.log(m));
let sum = 0;
function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;
    while (num > 0) {
        temp = a;
        a = a + b;
        b = temp;
        sum += b;
        num--;
    }
    return sum;
}
console.log(fibonacci(15));
//# sourceMappingURL=test.js.map