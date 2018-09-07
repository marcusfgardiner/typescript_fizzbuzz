"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../src/fizzbuzz");
const chai_1 = require("chai");
require("mocha");
describe('FizzBuzz', () => {
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
    it('returns Fezz for multiples of 13', () => {
        inputValues = [13, 26];
        const actualFezzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzes = inputValues.map(val => "Fezz");
        chai_1.expect(actualFezzes).to.deep.equal(expectedFezzes);
    });
    it('returns FezzBuzz for multiples of 13 and 5', () => {
        inputValues = [65, 130];
        const actualFezzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzBuzzes = inputValues.map(val => "FezzBuzz");
        chai_1.expect(actualFezzBuzzes).to.deep.equal(expectedFezzBuzzes);
    });
    it('returns FizzFezzBuzz for multiples of 13', () => {
        inputValues = [195, 390];
        const actualFizzFezzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzFezzBuzzes = inputValues.map(val => "FizzFezzBuzz");
        chai_1.expect(actualFizzFezzBuzzes).to.deep.equal(expectedFizzFezzBuzzes);
    });
    it('returns FizzBuzz for multiples of 3 and 5', () => {
        inputValues = [15, 30, 60];
        const actualFizzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzes = inputValues.map(val => "FizzBuzz");
        chai_1.expect(actualFizzBuzzes).to.deep.equal(expectedFizzBuzzes);
    });
    it('returns only Bong for multiples of 11 that are not multiples of 13', () => {
        inputValues = [11, 110, 22];
        const actualBongs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBongs = inputValues.map(val => "Bong");
        chai_1.expect(actualBongs).to.deep.equal(expectedBongs);
    });
    it('reverses the result for multiples of 17', () => {
        inputValues = [255, 2431];
        const actualReversed = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedReversed = ["BuzzFizz", "BongFezz"];
        chai_1.expect(actualReversed).to.deep.equal(expectedReversed);
    });
    it('returns only FezzBong for multiples of 11 that are multiples of 13', () => {
        inputValues = [143, 286];
        const actualFezzBongs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzBongs = inputValues.map(val => "FezzBong");
        chai_1.expect(actualFezzBongs).to.deep.equal(expectedFezzBongs);
    });
    it('returns the original number for all other cases', () => {
        inputValues = [17, 32, 71];
        const actualNumbers = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzes = ["17", "32", "71"];
        chai_1.expect(actualNumbers).to.deep.equal(expectedFizzBuzzes);
    });
});
//# sourceMappingURL=fizzbuzz.spec.js.map