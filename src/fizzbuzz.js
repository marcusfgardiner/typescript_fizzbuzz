"use strict";
// export class FizzBuzzer {
exports.__esModule = true;
//     constructor(){}
exports.fizzBuzz = function (number) {
    console.log("number", number);
    if (isDivisible(number, 5) && isDivisible(number, 3)) {
        return "FizzBuzz";
    }
    else if (isDivisible(number, 5)) {
        return "Buzz";
    }
    else if (isDivisible(number, 3)) {
        return "Fizz";
    }
    else {
        return number;
    }
};
var isDivisible = function (number, divisor) {
    return (number % divisor === 0);
};
var numberPrinter = function (limit) {
    for (var i = 0; i < limit; i++) {
        console.log(exports.fizzBuzz(i));
    }
};
numberPrinter(100);
