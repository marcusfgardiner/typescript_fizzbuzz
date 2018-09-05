"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
const chai_1 = require("chai");
require("mocha");
describe('CracklePop', () => {
    // beforeEach(function() {
    //     let fizzbuzzer = new FizzBuzzer();
    // })
    it('returns "Fizz" when given a multiple of 3', () => {
        let result = fizzbuzz_1.fizzBuzz(9);
        chai_1.expect(result).to.equal("Fizz");
    });
    it('returns "Buzz" when given a multiple of 5', () => {
        let result = fizzbuzz_1.fizzBuzz(35);
        chai_1.expect(result).to.equal("Buzz");
    });
    it('returns FizzBuzz for multiple of 3 and 5', () => {
        let result = fizzbuzz_1.fizzBuzz(60);
        chai_1.expect(result).to.equal("FizzBuzz");
    });
    it('returns the original number for all other cases', () => {
        let result = fizzbuzz_1.fizzBuzz(37);
        chai_1.expect(result).to.equal(37);
    });
});
//# sourceMappingURL=fizzbuzz.spec.js.map