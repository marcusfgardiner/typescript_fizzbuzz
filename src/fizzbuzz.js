"use strict";
// export class FizzBuzzer {
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(){}
exports.fizzBuzz = (number) => {
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
let isDivisible = (number, divisor) => {
    return (number % divisor === 0);
};
let numberPrinter = () => {
};
console.log(exports.fizzBuzz(5));
//# sourceMappingURL=fizzbuzz.js.map