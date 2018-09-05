export class FizzBuzzer {

    constructor( public defaultLimit: number = 100) {
        this.defaultLimit = defaultLimit
    }

    fizzBuzz = (number: number): string | number => {
        let fizzyString: string = ""
        if (this.isDivisible(number, 3)) {
            fizzyString += "Fizz"
        }
        if (this.isDivisible(number, 5)) {
            fizzyString += "Buzz"
        }
        if (this.isDivisible(number, 7)) {
            fizzyString += "Bang"
        }
        if (fizzyString === "") {
            return number
        }
        else {
            return fizzyString
        }
    }

    isDivisible = (number: number, divisor: number): boolean => {
        return (number % divisor === 0)
    }

    numberPrinter = (limit: number = this.defaultLimit) => {
        for (let i = 0; i < limit; i++) {
            console.log(this.fizzBuzz(i))
        }
    }
}

let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter()