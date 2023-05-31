"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number \n");
    var operator = (0, readline_sync_1.question)("Enter the operator \n");
    var secondStr = (0, readline_sync_1.question)("Enter the second number \n");
    var isvalid = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (isvalid) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        console.log(calculate(firstNum, secondNum, operator));
    }
    else {
        console.log("\nInvalid input try again \n");
        main();
    }
}
main();
function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "/":
            return firstNum / secondNum;
        case "*":
            return firstNum * secondNum;
    }
}
function isOperator(opr) {
    switch (opr) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
    }
    return false;
}
function isNumber(str) {
    var num = parseInt(str);
    var isTrue = !isNaN(num);
    return isTrue;
}
