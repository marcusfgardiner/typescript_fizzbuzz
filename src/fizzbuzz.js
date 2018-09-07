"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FizzBuzzer {
    constructor(defaultLimit = 100) {
        this.defaultLimit = defaultLimit;
        this.fizzBuzz = (number) => {
            let fizzyArray = [];
            let fizzyString;
            //TODO: combine curry function into single logic that takes in a function
            const applyStringRule = function (text, existingArray) {
                existingArray.push(text);
            };
            const constructApplyStringRule = function (text) {
                const returnFunc = ((array) => { applyStringRule(text, array); });
                return returnFunc;
            };
            const applyDeleteRule = function (text, existingArray) {
                existingArray.length = 0;
                applyStringRule(text, existingArray);
            };
            const constructApplyDeleteRule = function (text) {
                const returnFunc = ((array) => { applyDeleteRule(text, array); });
                return returnFunc;
            };
            const applyFezzRule = function (text, existingArray) {
                let i;
                for (i in existingArray) {
                    if (existingArray[i] === "B") {
                        break;
                    }
                }
                existingArray.splice(Number(i), 0, text);
            };
            const constructApplyFezzRule = function (text) {
                const returnFunc = ((array) => { applyFezzRule(text, array); });
                return returnFunc;
            };
            let rules = [
                { divisor: 3, action: constructApplyStringRule("Fizz") },
                { divisor: 5, action: constructApplyStringRule("Buzz") },
                { divisor: 7, action: constructApplyStringRule("Bang") },
                { divisor: 11, action: constructApplyDeleteRule("Bong") },
                { divisor: 13, action: constructApplyFezzRule("Fezz") }
            ];
            rules.forEach(rule => {
                if (this.isDivisible(number, rule.divisor)) {
                    // This is where the array (second argument) is fed in!
                    rule.action(fizzyArray);
                }
            });
            // if (this.isDivisible(number, 11) && !this.isDivisible(number, 13)) {
            //     return "Bong"
            // }
            // // addStrings()
            // for (let rule in stringRules) {
            //     let divisor: number = stringRules[rule]
            //     let string: string = rule
            //     this.divisibleAddString(string, divisor, number)
            // }
            // // reverseArray()
            // if (this.isDivisible(number, 17)) {
            //     this.fizzyArray = this.fizzyArray.reverse()
            // }
            // // numberCheck()
            // if (this.fizzyArray.length === 0) {
            //     this.fizzyArray.push(number.toString())
            // }
            fizzyString = fizzyArray.join('');
            return fizzyString;
        };
        // divisibleAddString = (string: string, divisor: number, number: number) => {
        //     if(this.isDivisible(number, divisor)) {
        //         this.fizzyArray.push(string)
        //     }
        // }
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