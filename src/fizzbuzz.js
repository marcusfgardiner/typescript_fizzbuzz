"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
        this.fizzBuzz = (number) => {
            let fizzyArray = [];
            let fizzyString;
            let isFezz;
            if (this.isDivisible(number, 3)) {
                fizzyArray.push("Fizz");
            }
            if (this.isDivisible(number, 13)) {
                isFezz = true;
                fizzyArray.push("Fezz");
            }
            if (this.isDivisible(number, 5)) {
                fizzyArray.push("Buzz");
            }
            if (this.isDivisible(number, 7)) {
                fizzyArray.push("Bang");
            }
            if (this.isDivisible(number, 11)) {
                if (isFezz) {
                    fizzyArray = ["Fezz", "Bong"];
                }
                else {
                    fizzyArray = ["Bong"];
                }
            }
            if (this.isDivisible(number, 17)) {
                fizzyArray = fizzyArray.reverse();
            }
            if (fizzyArray.length === 0) {
                fizzyArray.push(number.toString());
            }
            fizzyString = fizzyArray.join('');
            return fizzyString;
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