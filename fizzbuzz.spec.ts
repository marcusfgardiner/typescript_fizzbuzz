import { fizzBuzz } from './fizzbuzz'
import { expect } from 'chai';
import 'mocha';

describe('CracklePop', () => {

    // beforeEach(function() {
    //     let fizzbuzzer = new FizzBuzzer();
    // })

    it('returns "Fizz" when given a multiple of 3', () => {
        let result = fizzBuzz(9)
        expect(result).to.equal("Fizz")
    });

    it('returns "Buzz" when given a multiple of 5', () => {
        let result = fizzBuzz(35)
        expect(result).to.equal("Buzz")
    });

    it('returns FizzBuzz for multiple of 3 and 5', () => {
        let result = fizzBuzz(60)
        expect(result).to.equal("FizzBuzz")
    })

    it('returns the original number for all other cases', () => {
        let result = fizzBuzz(37)
        expect(result).to.equal(37)
    })
});