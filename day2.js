"use strict";
exports.__esModule = true;
var day1_1 = require("./day1");
var numbers = day1_1.numbersFromInput(day1_1.INPUT);
var result = 0;
var msg = "";
for (var i1 = 0; i1 < numbers.length - 1; i1++) {
    for (var i2 = 0; i2 < numbers.length - 1; i2++) {
        for (var i3 = 0; i3 < numbers.length - 1; i3++) {
            var sum = numbers[i1] + numbers[i2] + numbers[i3];
            if (sum === 2020) {
                result = numbers[i1] * numbers[i2] * numbers[i3];
                msg = numbers[i1] + ", " + numbers[i2] + ", " + numbers[i3] + ": " + result;
            }
        }
    }
}
console.log(msg);
// }
// numbers.forEach(
//     (number1) => (numbers.forEach(
//         (number2) => (numbers.forEach(
//             (number3) => (
//                 if ((number1 + number2 + number3) === 2020) {
//                     result = number1 + number2 + number3;
// }
//             )
//         ))
//     ))
// );
// console.log(result);
// const numbers3: number[] = map(numbers, (number) => map(numbers2, (number2) => number - number2))
// const numbers3: number[] = map(numbers2, map((numbers) => (numbers2(number, index) => numbers[index] - number).filter((number) => number >= 0)
// // const numbers3: number[] = map(numbers2, (number, index) => numbers[index] - number).filter((number) => number >= 0)
// const numbers4: number[] = map(numbers3, (number) => numbers.includes(number) ? number : 1).filter((number) => number !== 1);
// console.log(numbers4);
// const result:number = numbers4.reduce((result, i) => result * i);
// if (numbers4.length !== 3){
//     console.log("Incorrect numbers count: " + numbers4.length);
// }else{
//     console.log("Number 1: " +numbers[0]+ " Number 2: " + result[1] + " Number 3: " + result[2]);
//     console.log("Result is: " + result);
// }
