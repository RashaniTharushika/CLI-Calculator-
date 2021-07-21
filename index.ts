import { question } from "readline-sync";

type operator ='+'| '-'|'*'|'/';

function main(): void {
    const firstStr:string =question("Enter first number: ");
    const operator:string =question("Enter operator: ");
    const secondStr:string =question("Enter second number: ");
    console.log(firstStr,operator,secondStr);

    const validInput:boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(validInput)
    {
        console.log('is valid.');
        const firstNum: number =parseInt(firstStr);
        const secondNum: number =parseInt(secondStr);
        const result:calculate(firstNum,operator as operator,secondNum);
        console.log(result);
    }
    else
    {
        console.log('\ninvalid input\n');
        main();
    }
}

function calculate(firstNum:number,operator:operator,secondNum:number)
{
    switch(operator)
    {
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

function isOperator(operator:string):boolean {
    switch(operator){
        case'+':
        case'-':
        case'*':
        case'/':
            return true;
        default:
            return false;
    }
}

function isNumber(str:string):boolean {
    const maybeNum = parseInt(str);   //33 Null
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main();