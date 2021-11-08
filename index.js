"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter your first Number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter your second Number:\n');
    var isValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(firstNum + " " + operator + " " + secondNum + " = " + result);
    }
    else {
        main();
    }
}
function calculate(first, operator, second) {
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
function isNumber(str) {
    var check = parseInt(str);
    return !isNaN(check);
}
function isOperator(str) {
    switch (str) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
}
main();
