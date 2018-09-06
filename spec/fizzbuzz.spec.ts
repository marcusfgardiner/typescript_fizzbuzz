import { FizzBuzzer } from '../src/fizzbuzz'
import { expect } from 'chai';
import 'mocha';


describe('CracklePop', () => {
    let fizzbuzzer: FizzBuzzer
    let inputValues: number[]

    before(() => {
        fizzbuzzer = new FizzBuzzer();
    })

    it('returns "Fizz" when given multiples of 3', () => {
        inputValues = [9, 18, 93];
        const actualFizzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzes = inputValues.map(val => "Fizz")
        expect(actualFizzes).to.deep.equal(expectedFizzes)
    });

    it('returns "Buzz" when given multiples of 5', () => {
        inputValues = [5, 20, 25];
        const actualBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBuzzes = inputValues.map(val => "Buzz")
        expect(actualBuzzes).to.deep.equal(expectedBuzzes)
    });

    it('returns Bang for multiples of 7', () => {
        inputValues = [7, 14];
        const actualBangs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBangs = inputValues.map(val => "Bang")
        expect(actualBangs).to.deep.equal(expectedBangs)
    })

    it('returns FizzBang for multiples of 7 and 3', () => {
        inputValues = [21, 42];
        const actualFizzBangs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBangs = inputValues.map(val => "FizzBang")
        expect(actualFizzBangs).to.deep.equal(expectedFizzBangs)
    })

    it('returns BuzzBang for multiples of 7 and 5', () => {
        inputValues = [35, 70];
        const actualBuzzBang = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBuzzBang = inputValues.map(val => "BuzzBang")
        expect(actualBuzzBang).to.deep.equal(expectedBuzzBang)
    })

    it('returns FizzBuzzBang for multiples of 7, 5 and 3', () => {
        inputValues = [105, 210];
        const actualFizzBuzzBang = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzBang = inputValues.map(val => "FizzBuzzBang")
        expect(actualFizzBuzzBang).to.deep.equal(expectedFizzBuzzBang)
    })

    it('returns Fezz for multiples of 13', () => {
        inputValues = [13, 26];
        const actualFezzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzes = inputValues.map(val => "Fezz")
        expect(actualFezzes).to.deep.equal(expectedFezzes)
    })

    it('returns FezzBuzz for multiples of 13 and 5', () => {
        inputValues = [65, 130];
        const actualFezzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzBuzzes = inputValues.map(val => "FezzBuzz")
        expect(actualFezzBuzzes).to.deep.equal(expectedFezzBuzzes)
    })

    it('returns FizzFezzBuzz for multiples of 13', () => {
        inputValues = [195, 390];
        const actualFizzFezzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzFezzBuzzes = inputValues.map(val => "FizzFezzBuzz")
        expect(actualFizzFezzBuzzes).to.deep.equal(expectedFizzFezzBuzzes)
    })


    it('returns FizzBuzz for multiples of 3 and 5', () => {
        inputValues = [15, 30, 60];
        const actualFizzBuzzes = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzes = inputValues.map(val => "FizzBuzz")
        expect(actualFizzBuzzes).to.deep.equal(expectedFizzBuzzes)
    })

    it('returns only Bong for multiples of 11 that are not multiples of 13', () => {
        inputValues = [11, 110, 22];
        const actualBongs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedBongs =  inputValues.map(val => "Bong")
        expect(actualBongs).to.deep.equal(expectedBongs)
    })

    it('reverses the result for multiples of 17', () => {
        inputValues = [255, 2431];
        const actualReversed = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedReversed =  ["BuzzFizz", "BongFezz"]
        expect(actualReversed).to.deep.equal(expectedReversed)
    })

    it('returns only FezzBong for multiples of 11 that are multiples of 13', () => {
        inputValues = [143, 286];
        const actualFezzBongs = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFezzBongs =  inputValues.map(val => "FezzBong")
        expect(actualFezzBongs).to.deep.equal(expectedFezzBongs)
    })

    it('returns the original number for all other cases', () => {
        inputValues = [17, 32, 71];
        const actualNumbers = inputValues.map(val => fizzbuzzer.fizzBuzz(val));
        const expectedFizzBuzzes =  ["17", "32", "71"]
        expect(actualNumbers).to.deep.equal(expectedFizzBuzzes)
    })
});