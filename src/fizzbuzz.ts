export class FizzBuzzer {

    constructor( public defaultLimit: number = 100) {
        this.defaultLimit = defaultLimit
    }

    applyStringRule = function (text: string, existingArray: string[]) {
        existingArray.push(text)
    }

    constructApplyStringRule = function(text: string) {
        const returnFunc = ((array) => { this.applyStringRule(text, array); });
        return returnFunc;
    }

    applyDeleteRule = function (text:string, existingArray: string[]) {
        existingArray.length = 0
        this.applyStringRule(text, existingArray)
    }

    constructApplyDeleteRule = function(text: string) {
        const returnFunc = ((array) => { this.applyDeleteRule(text, array); } );
        return returnFunc;
    }

    applyInjectBeforeB = function (text:string, existingArray: string[]) {
        let i: string
        for (i in existingArray) {
            if (existingArray[i] === "B") {
                break
            }
        }
        existingArray.splice(Number(i), 0, text)
    }

    constructInjectBeforeB = function(text: string) {
        const returnFunc = ((array) => { this.applyInjectBeforeB(text, array); } );
        return returnFunc
    }

    reverseRule = function(existingArray: string[]) {
        existingArray = existingArray.reverse()
    }

    fizzBuzz = (number: number): string => {
        let fizzyArray: string[] = []
        let fizzyString: string
        
        //TODO: combine curry function into single logic that takes in a function
        // const constructRule = function (text: string, object) {   
        // }

        let divisorRules = [
            {divisor: 3, action: this.constructApplyStringRule("Fizz")},
            {divisor: 5, action: this.constructApplyStringRule("Buzz")},
            {divisor: 7, action: this.constructApplyStringRule("Bang")},
            {divisor: 11, action: this.constructApplyDeleteRule("Bong")},
            {divisor: 13, action: this.constructInjectBeforeB("Fezz")}, 
            {divisor: 17, action: this.reverseRule}, 
        ];

        divisorRules.forEach(rule =>  {
            if(this.isDivisible(number, rule.divisor)) {
                rule.action(fizzyArray);
            }
        })

        if (fizzyArray.length === 0) {
            this.applyStringRule(String(number), fizzyArray)
        }

        fizzyString = fizzyArray.join('')
        return fizzyString
    }

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