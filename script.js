const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(2,3)); //6

const divide = (a,b) => {
    return a/b;
}
console.log(divide(6,2)); //3

const num1 = 0;
const num2 = 0;
const operation = '';

const operate = (a, operator , b) => {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            if(b === 0){
                return "Dividing by 0! lol";
            }
            return divide(a,b);
        default:
            return "Invalid operator";
    };
};

console.log(operate(1,'+',2));//3
console.log(operate(2,'-',1));//1
console.log(operate(3,'*',5));//15
console.log(operate(10,'/',2));//5
console.log(operate(12,'/',0));//Dividing by zero lol
console.log(operate(1,'x',2));//Invalid



