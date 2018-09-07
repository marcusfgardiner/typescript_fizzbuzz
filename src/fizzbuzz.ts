export class FizzBuzzer {

    constructor( public defaultLimit: number = 100) {
        this.defaultLimit = defaultLimit
    }

    fizzBuzz = (number: number): string => {
        let fizzyArray: string[] = []
        let fizzyString: string

        //TODO: combine curry function into single logic that takes in a function

        const applyStringRule = function (text: string, existingArray: string[]) {
            existingArray.push(text)
        }

        const constructApplyStringRule = function(text: string) {
            const returnFunc = ((array) => { applyStringRule(text, array); });
            return returnFunc;
        }

        const applyDeleteRule = function (text:string, existingArray: string[]) {
            existingArray.length = 0
            applyStringRule(text, existingArray)
        }

        const constructApplyDeleteRule = function(text: string) {
            const returnFunc = ((array) => { applyDeleteRule(text, array); } );
            return returnFunc;
        }

        const applyFezzRule = function (text:string, existingArray: string[]) {
            let i: string
            for (i in existingArray) {
                if (existingArray[i] === "B") {
                    break
                }
            }
            existingArray.splice(Number(i), 0, text)

        }

        const constructApplyFezzRule = function(text: string) {
            const returnFunc = ((array) => { applyFezzRule(text, array); } );
            return returnFunc
        }

        let rules = [
            {divisor: 3, action: constructApplyStringRule("Fizz")},
            {divisor: 5, action: constructApplyStringRule("Buzz")},
            {divisor: 7, action: constructApplyStringRule("Bang")},
            {divisor: 11, action: constructApplyDeleteRule("Bong")},
            {divisor: 13, action: constructApplyFezzRule("Fezz")}
        ];

        rules.forEach(rule =>  {
            if(this.isDivisible(number, rule.divisor)) {
                // This is where the array (second argument) is fed in!
                rule.action(fizzyArray);
            }
        })

        // if (this.isDivisible(number, 11) && !this.isDivisible(number, 13)) {
        //     return "Bong"
        // }
        // // addStrings()
        // for (let rule in stringRules) {
        //     let divisor: number = stringRules[rule]
        //     let string: string = rule
        //     this.divisibleAddString(string, divisor, number)
        // }
        // // reverseArray()
        // if (this.isDivisible(number, 17)) {
        //     this.fizzyArray = this.fizzyArray.reverse()
        // }
        // // numberCheck()
        // if (this.fizzyArray.length === 0) {
        //     this.fizzyArray.push(number.toString())
        // }
        fizzyString = fizzyArray.join('')
        return fizzyString
    }

    // divisibleAddString = (string: string, divisor: number, number: number) => {
    //     if(this.isDivisible(number, divisor)) {
    //         this.fizzyArray.push(string)
    //     }
    // }

    isDivisible = (number: number, divisor: number): boolean => {
        return (number % divisor === 0)
    }

    numberPrinter = (limit: number = this.defaultLimit) => {
        for (let i = 0; i < limit; i++) {
            console.log('Number',i)
            console.log('Answer', this.fizzBuzz(i))
        }
    }
}

let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter()

// console.log('ANSWER', fizzBuzzer.fizzBuzz(110))