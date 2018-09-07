"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
        this.applyStringRule = function (text, existingArray) {
            existingArray.push(text);
        };
        this.constructApplyStringRule = function (text) {
            const returnFunc = ((array) => { this.applyStringRule(text, array); });
            return returnFunc;
        };
        this.applyDeleteRule = function (text, existingArray) {
            existingArray.length = 0;
            this.applyStringRule(text, existingArray);
        };
        this.constructApplyDeleteRule = function (text) {
            const returnFunc = ((array) => { this.applyDeleteRule(text, array); });
            return returnFunc;
        };
        this.applyInjectBeforeB = function (text, existingArray) {
            let i;
            for (i in existingArray) {
                if (existingArray[i] === "B") {
                    break;
                }
            }
            existingArray.splice(Number(i), 0, text);
        };
        this.constructInjectBeforeB = function (text) {
            const returnFunc = ((array) => { this.applyInjectBeforeB(text, array); });
            return returnFunc;
        };
        this.reverseRule = function (existingArray) {
            existingArray = existingArray.reverse();
        };
        this.fizzBuzz = (number) => {
            let fizzyArray = [];
            let fizzyString;
            //TODO: combine curry function into single logic that takes in a function
            // const constructRule = function (text: string, object) {   
            // }
            let divisorRules = [
                { divisor: 3, action: this.constructApplyStringRule("Fizz") },
                { divisor: 5, action: this.constructApplyStringRule("Buzz") },
                { divisor: 7, action: this.constructApplyStringRule("Bang") },
                { divisor: 11, action: this.constructApplyDeleteRule("Bong") },
                { divisor: 13, action: this.constructInjectBeforeB("Fezz") },
                { divisor: 17, action: this.reverseRule },
            ];
            divisorRules.forEach(rule => {
                if (this.isDivisible(number, rule.divisor)) {
                    // This is where the array (second argument) is fed in!
                    rule.action(fizzyArray);
                }
            });
            if (fizzyArray.length === 0) {
                this.applyStringRule(String(number), fizzyArray);
            }
            fizzyString = fizzyArray.join('');
            return fizzyString;
        };
        this.isDivisible = (number, divisor) => {
            return (number % divisor === 0);
        };
        this.numberPrinter = (limit = this.defaultLimit) => {
            for (let i = 0; i < limit; i++) {
                console.log('Number', i);
                console.log('Answer', this.fizzBuzz(i));
            }
        };
        this.defaultLimit = defaultLimit;
    }
}
exports.FizzBuzzer = FizzBuzzer;
let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter();
// console.log('ANSWER', fizzBuzzer.fizzBuzz(110))
//# sourceMappingURL=fizzbuzz.js.map