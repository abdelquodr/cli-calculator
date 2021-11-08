import { question } from 'readline-sync'

type Operator = '+' | '-' | '*' | '/';

function main():void {
    const firstStr: string = question('Enter your first Number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter your second Number:\n');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator)  && isNumber(secondStr)

    if(isValid) {
        const firstNum: number = parseInt(firstStr)
        const secondNum: number = parseInt(secondStr) 

        const  result = calculate(firstNum, operator as Operator, secondNum)
        console.log(`${firstNum} ${operator} ${secondNum} = ${result}`)
    }else {
        main()
    }
}


function calculate( first:number, operator, second:number ) {
    switch (operator) {
        case '+':
            return first + second;  
            break; 
        case '-':
            return first - second;   
            break; 
        case '*':
            return first * second;                 
            break;
        case '/':
            return first / second;                 
            break;
        default:
            break;
    }
}

function isNumber(str: string): boolean {
    const check: number = parseInt(str)
    return !isNaN(check)
}

function isOperator(str: string): boolean {
    switch (str) {
        case '+':
        case '-':
        case '/':        
        case '*':
        return true
    }
}

main()