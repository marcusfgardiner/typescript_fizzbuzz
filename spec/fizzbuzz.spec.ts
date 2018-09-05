import { FizzBuzzer } from '../src/fizzbuzz'
import { expect } from 'chai';
import 'mocha';

describe('CracklePop', () => {

    // TODO: 
    // beforeEach(function() {
    //     const fizzbuzzer = new FizzBuzzer();
    // })

    it('returns "Fizz" when given a multiple of 3', () => {
        const fizzbuzzer = new FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(9)
        expect(result).to.equal("Fizz")
    });

    it('returns "Buzz" when given a multiple of 5', () => {
        const fizzbuzzer = new FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(35)
        expect(result).to.equal("Buzz")
    });

    it('returns FizzBuzz for multiple of 3 and 5', () => {
        const fizzbuzzer = new FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(60)
        expect(result).to.equal("FizzBuzz")
    })

    it('returns the original number for all other cases', () => {
        const fizzbuzzer = new FizzBuzzer();
        let result = fizzbuzzer.fizzBuzz(37)
        expect(result).to.equal(37)
    })
});