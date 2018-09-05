"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
        this.fizzBuzz = (number) => {
            let fizzyString = "";
            if (this.isDivisible(number, 3)) {
                fizzyString += "Fizz";
            }
            if (this.isDivisible(number, 5)) {
                fizzyString += "Buzz";
            }
            if (this.isDivisible(number, 7)) {
                fizzyString += "Bang";
            }
            if (fizzyString === "") {
                return number;
            }
            else {
                return fizzyString;
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