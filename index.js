"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question("Enter first number: ");
    var operator = readline_sync_1.question("Enter operator: ");
    var secondStr = readline_sync_1.question("Enter second number: ");
    console.log(firstStr, operator, secondStr);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        console.log('is valid.');
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result;
        (firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\invalid input');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum + secondNum;
        case '*':
            return firstNum + secondNum;
        case '/':
            return firstNum + secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); //33 Null
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
