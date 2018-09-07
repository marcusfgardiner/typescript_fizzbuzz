"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
        this.fizzBuzz = (number) => {
            let fizzyArray = [];
            this.divisorRules.forEach(rule => {
                if (this.isDivisible(number, rule.divisor)) {
                    rule.action(fizzyArray);
                }
            });
            this.numberRule(number, fizzyArray);
            return fizzyArray.join('');
        };
        this.constructCurriedRule = function (rule, text) {
            const returnFunc = ((array) => { rule(text, array); });
            return returnFunc;
        };
        this.stringRule = function (text, existingArray) {
            existingArray.push(text);
        };
        this.deleteReplaceRule = (text, existingArray) => {
            existingArray.length = 0;
            this.stringRule(text, existingArray);
        };
        this.injectBeforeBRule = function (text, existingArray) {
            let i;
            for (i in existingArray) {
                if (existingArray[i] === "B") {
                    break;
                }
            }
            existingArray.splice(Number(i), 0, text);
        };
        this.reverseRule = function (existingArray) {
            existingArray.reverse();
        };
        this.numberRule = (number, array) => {
            if (array.length === 0) {
                this.stringRule(String(number), array);
            }
        };
        this.isDivisible = (number, divisor) => {
            return (number % divisor === 0);
        };
        this.numberPrinter = (limit = this.defaultLimit) => {
            for (let i = 1; i < limit; i++) {
                console.log('Answer', this.fizzBuzz(i));
            }
        };
        this.defaultLimit = defaultLimit;
        this.divisorRules = [
            { divisor: 3, action: this.constructCurriedRule(this.stringRule, "Fizz") },
            { divisor: 5, action: this.constructCurriedRule(this.stringRule, "Buzz") },
            { divisor: 7, action: this.constructCurriedRule(this.stringRule, "Bang") },
            { divisor: 11, action: this.constructCurriedRule(this.deleteReplaceRule, "Bong") },
            { divisor: 13, action: this.constructCurriedRule(this.injectBeforeBRule, "Fezz") },
            { divisor: 17, action: this.reverseRule },
        ];
    }
}
exports.FizzBuzzer = FizzBuzzer;
let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter();
//# sourceMappingURL=fizzbuzz.js.map