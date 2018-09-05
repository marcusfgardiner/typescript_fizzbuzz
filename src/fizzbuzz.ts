export class FizzBuzzer {

    constructor() { }

    fizzBuzz = (number: number): string | number => {
        console.log("number", number)
        if (this.isDivisible(number, 5) && this.isDivisible(number, 3)) {
            return "FizzBuzz"
        }
        else if (this.isDivisible(number, 5)) {
            return "Buzz"
        }
        else if (this.isDivisible(number, 3)) {
            return "Fizz"
        }
        else {
            return number
        }
    }

    isDivisible = (number: number, divisor: number): boolean => {
        return (number % divisor === 0)
    }

    numberPrinter = (limit: number) => {
        for (let i = 0; i < limit; i++) {
            console.log(this.fizzBuzz(i))
        }
    }
}

let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter(100)