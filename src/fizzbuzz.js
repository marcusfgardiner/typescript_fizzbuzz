"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100, fizzyArray = []) {
        this.defaultLimit = defaultLimit;
        this.fizzyArray = fizzyArray;
        this.fizzBuzz = (number) => {
            this.fizzyArray = [];
            let fizzyString;
            let isFezz;
            let stringRules = { "Fizz": 3, "Fezz": 13, "Buzz": 5, "Bang": 7, "Bong": 11 };
            // enum Rules {Fizz: 3, Fezz: 13, Buzz: 5, Bang: 7, Bong: 11}
            console.log(stringRules);
            if (this.isDivisible(number, 11) && !this.isDivisible(number, 13)) {
                return "Bong";
            }
            for (let rule in stringRules) {
                let divisor = stringRules[rule];
                let string = rule;
                this.divisibleAddString(string, divisor, number);
            }
            if (this.isDivisible(number, 17)) {
                this.fizzyArray = this.fizzyArray.reverse();
            }
            if (this.fizzyArray.length === 0) {
                this.fizzyArray.push(number.toString());
            }
            fizzyString = this.fizzyArray.join('');
            return fizzyString;
        };
        this.divisibleAddString = (string, divisor, number) => {
            if (this.isDivisible(number, divisor)) {
                this.fizzyArray.push(string);
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