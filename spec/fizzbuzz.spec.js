"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../src/fizzbuzz");
const chai_1 = require("chai");
require("mocha");
describe('CracklePop', () => {
    let fizzbuzzer;
    let inputValues;
    before(() => {
        fizzbuzzer = new fizzbuzz_1.FizzBuzzer();
    });
    it('returns "Fizz" when given multiples of 3', () => {
        inputValues = [9, 18, 93];
        const actualFizzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzes = inputValues.map(val => "Fizz");
        chai_1.expect(actualFizzes).to.deep.equal(expectedFizzes);
    });
    it('returns "Buzz" when given multiples of 5', () => {
        inputValues = [5, 20, 25];
        const actualBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBuzzes = inputValues.map(val => "Buzz");
        chai_1.expect(actualBuzzes).to.deep.equal(expectedBuzzes);
    });
    it('returns Bang for multiples of 7', () => {
        inputValues = [7, 14];
        const actualBangs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBangs = inputValues.map(val => "Bang");
        chai_1.expect(actualBangs).to.deep.equal(expectedBangs);
    });
    it('returns FizzBang for multiples of 7 and 3', () => {
        inputValues = [21, 42];
        const actualFizzBangs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBangs = inputValues.map(val => "FizzBang");
        chai_1.expect(actualFizzBangs).to.deep.equal(expectedFizzBangs);
    });
    it('returns BuzzBang for multiples of 7 and 5', () => {
        inputValues = [35, 70];
        const actualBuzzBang = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBuzzBang = inputValues.map(val => "BuzzBang");
        chai_1.expect(actualBuzzBang).to.deep.equal(expectedBuzzBang);
    });
    it('returns FizzBuzzBang for multiples of 7, 5 and 3', () => {
        inputValues = [105, 210];
        const actualFizzBuzzBang = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzBang = inputValues.map(val => "FizzBuzzBang");
        chai_1.expect(actualFizzBuzzBang).to.deep.equal(expectedFizzBuzzBang);
    });
    it('returns FizzBuzz for multiples of 3 and 5', () => {
        inputValues = [15, 30, 60];
        const actualFizzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzes = inputValues.map(val => "FizzBuzz");
        chai_1.expect(actualFizzBuzzes).to.deep.equal(expectedFizzBuzzes);
    });
    it('returns the original number for all other cases', () => {
        inputValues = [14, 32, 71];
        const actualNumbers = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        chai_1.expect(actualNumbers).to.deep.equal(inputValues);
    });
});
//# sourceMappingURL=fizzbuzz.spec.js.map