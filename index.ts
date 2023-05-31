import {question} from "readline-sync";


type Operator = '+' | '-'|'/'|'*';


function main()
{
  const firstStr :string = question("Enter the first number \n");
  const operator :string = question("Enter the operator \n");
  const secondStr :string = question("Enter the second number \n");
  
  const isvalid :boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
  if(isvalid){
    const firstNum:number = parseInt(firstStr);
    const secondNum:number =parseInt(secondStr);
    console.log(calculate(firstNum,secondNum,operator as Operator)); 

  }else{
    console.log("\nInvalid input try again \n");
    main();  
}
}
main();


function calculate(firstNum:number,secondNum:number,operator:Operator){
  switch(operator){
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




function isOperator(opr:string):boolean
{
    switch(opr){
        case '+':
        case '-':
        case '*':
        case '/':
            return true    
    }
    return false;
}

function isNumber (str :string ):boolean{
    const num = parseInt(str);
    const isTrue = !isNaN(num);
    return isTrue;
}