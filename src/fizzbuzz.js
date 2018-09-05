"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
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
        this.numberPrinter = (limit = this.defaultLimit) => {
            for (let i = 0; i < limit; i++) {
                console.log(this.fizzBuzz(i));
            }
        };
        this.defaultLimit = defaultLimit;
    }
}
exports.FizzBuzzer = FizzBuzzer;
let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter();
//# sourceMappingURL=fizzbuzz.js.map