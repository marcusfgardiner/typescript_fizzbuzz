export class FizzBuzzer {

    constructor( public defaultLimit: number = 100, public fizzyArray: string[] = []) {
        this.defaultLimit = defaultLimit
    }

    fizzBuzz = (number: number): string => {
        this.fizzyArray = []
        let fizzyString: string
        let isFezz: boolean
        let stringRules: object = {"Fizz": 3, "Fezz": 13, "Buzz": 5, "Bang": 7, "Bong": 11}
        if (this.isDivisible(number, 11) && !this.isDivisible(number, 13)) {
            return "Bong"
        }
        for(let rule in stringRules) {
            let divisor: number = stringRules[rule]
            let string: string = rule
            this.divisibleAddString(string, divisor, number)
        }
        if (this.isDivisible(number, 17)) {
            this.fizzyArray = this.fizzyArray.reverse()
        }
        if (this.fizzyArray.length === 0) {
            this.fizzyArray.push(number.toString())
        }
        fizzyString = this.fizzyArray.join('')
        return fizzyString
    }

    divisibleAddString = (string: string, divisor: number, number: number) => {
        if(this.isDivisible(number, divisor)) {
            this.fizzyArray.push(string)
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