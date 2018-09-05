// export class FizzBuzzer {

//     constructor(){}

export let fizzBuzz = (number: number) : string|number => {
    console.log("number", number)
    if (isDivisible(number, 5) && isDivisible(number, 3)) {
        return "FizzBuzz"
    }
    else if (isDivisible(number, 5)) {
        return "Buzz"
    }
    else if (isDivisible(number, 3)) {
        return "Fizz"
    }
    else {
        return number
    }
}

let isDivisible = (number: number, divisor: number) : boolean => {
    return (number % divisor === 0)
}

let numberPrinter = () => {

}

console.log(fizzBuzz(5))