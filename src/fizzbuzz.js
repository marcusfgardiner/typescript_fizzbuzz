"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor() {
        this.fizzBuzz = (number) => {
            console.log("number", number);
            if (this.isDivisible(number, 5) && this.isDivisible(number, 3)) {
                return "FizzBuzz";
            }
            else if (this.isDivisible(number, 5)) {
                return "Buzz";
            }
            else if (this.isDivisible(number, 3)) {
                return "Fizz";
            }
            else {
                return number;
            }
        };
        this.isDivisible = (number, divisor) => {
            return (number % divisor === 0);
        };
        this.numberPrinter = (limit) => {
            for (let i = 0; i < limit; i++) {
                console.log(this.fizzBuzz(i));
            }
        };
    }
}
exports.FizzBuzzer = FizzBuzzer;
// export let fizzBuzz = (number: number) : string|number => {
//     console.log("number", number)
//     if (isDivisible(number, 5) && isDivisible(number, 3)) {
//         return "FizzBuzz"
//     }
//     else if (isDivisible(number, 5)) {
//         return "Buzz"
//     }
//     else if (isDivisible(number, 3)) {
//         return "Fizz"
//     }
//     else {
//         return number
//     }
// }
// let isDivisible = (number: number, divisor: number) : boolean => {
//     return (number % divisor === 0)
// }
// let numberPrinter = (limit: number) => {
//     for (let i = 0; i < limit; i++) {
//         console.log(fizzBuzz(i))
//     }
// }
let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter(100);
//# sourceMappingURL=fizzbuzz.js.map