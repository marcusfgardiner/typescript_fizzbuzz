export class FizzBuzzer {

    constructor( public defaultLimit: number = 100) {
        this.defaultLimit = defaultLimit
    }

    fizzBuzz = (number: number): string => {
        let fizzyArray: string[] = []
        let fizzyString: string
        let isFezz: boolean
        if (this.isDivisible(number, 3)) {
            fizzyArray.push("Fizz")
        }
        if (this.isDivisible(number, 13)) {
            isFezz = true
            fizzyArray.push("Fezz")
        }
        if (this.isDivisible(number, 5)) {
            fizzyArray.push("Buzz")
        }
        if (this.isDivisible(number, 7)) {
            fizzyArray.push("Bang")
        }
        if (this.isDivisible(number, 11)) {
            if (isFezz) {
                fizzyArray = ["Fezz", "Bong"]
            }
            else {
                fizzyArray = ["Bong"]
            }
        }
        if (this.isDivisible(number, 17)) {
            fizzyArray = fizzyArray.reverse()
        }
        if (fizzyArray.length === 0) {
            fizzyArray.push(number.toString())
        }
        fizzyString = fizzyArray.join('')
        return fizzyString
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