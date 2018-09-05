"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../src/fizzbuzz");
const chai_1 = require("chai");
require("mocha");
describe('CracklePop', () => {
    // TODO: 
    // beforeEach(function() {
    //     const fizzbuzzer = new FizzBuzzer();
    // })
    it('returns "Fizz" when given a multiple of 3', () => {
        const fizzbuzzer = new fizzbuzz_1.FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(9);
        chai_1.expect(result).to.equal("Fizz");
    });
    it('returns "Buzz" when given a multiple of 5', () => {
        const fizzbuzzer = new fizzbuzz_1.FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(35);
        chai_1.expect(result).to.equal("Buzz");
    });
    it('returns FizzBuzz for multiple of 3 and 5', () => {
        const fizzbuzzer = new fizzbuzz_1.FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(60);
        chai_1.expect(result).to.equal("FizzBuzz");
    });
    it('returns the original number for all other cases', () => {
        const fizzbuzzer = new fizzbuzz_1.FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(37);
        chai_1.expect(result).to.equal(37);
    });
});
//# sourceMappingURL=fizzbuzz.spec.js.map