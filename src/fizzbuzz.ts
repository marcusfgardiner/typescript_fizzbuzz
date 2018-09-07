type Rule =  (text: string, array: string[]) => void;
type Action = (array: string[]) => void;

export class FizzBuzzer {

    public divisorRules: { divisor: number; action: Action }[]

    constructor(public defaultLimit: number = 100) {
        this.defaultLimit = defaultLimit
        this.divisorRules = [
            { divisor: 3, action: this.constructCurriedRule(this.stringRule, "Fizz") },
            { divisor: 5, action: this.constructCurriedRule(this.stringRule, "Buzz") },
            { divisor: 7, action: this.constructCurriedRule(this.stringRule, "Bang") },
            { divisor: 11, action: this.constructCurriedRule(this.deleteReplaceRule, "Bong") },
            { divisor: 13, action: this.constructCurriedRule(this.injectBeforeBRule, "Fezz") },
            { divisor: 17, action: this.reverseRule },
        ];
    }

    fizzBuzz = (number: number): string => {
        let fizzyArray: string[] = []
        this.divisorRules.forEach(rule => {
            if (this.isDivisible(number, rule.divisor)) {
                rule.action(fizzyArray);
            }
        })
        this.numberRule(number, fizzyArray)
        return fizzyArray.join('')
    }

    constructCurriedRule = function (rule: Rule, text: string) {
        const returnFunc = ((array) => { rule(text, array); });
        return returnFunc;
    }

    stringRule = function (text: string, existingArray: string[]) {
        existingArray.push(text)
    }

    deleteReplaceRule = (text: string, existingArray: string[]) => {
        existingArray.length = 0
        this.stringRule(text, existingArray)
    }

    injectBeforeBRule = function (text: string, existingArray: string[]) {
        let i: string
        for (i in existingArray) {
            if (existingArray[i] === "B") {
                break
            }
        }
        existingArray.splice(Number(i), 0, text)
    }

    reverseRule = function (existingArray: string[]) {
        existingArray.reverse()
    }

    numberRule = (number: number, array: string[]) => {
        if (array.length === 0) {
            this.stringRule(String(number), array)
        }
    }

    isDivisible = (number: number, divisor: number): boolean => {
        return (number % divisor === 0)
    }

    numberPrinter = (limit: number = this.defaultLimit) => {
        for (let i = 1; i < limit; i++) {
            console.log('Answer', this.fizzBuzz(i))
        }
    }
}

let fizzBuzzer = new FizzBuzzer();
fizzBuzzer.numberPrinter()