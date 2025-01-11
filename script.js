const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const modulus = (a,b) => {
    return a % b;
}

const multiply = (a,b) => {
    return a * b;
}
// console.log(multiply(2,3)); //6

const divide = (a,b) => {
    return a/b;
}
// console.log(divide(6,2)); //3

const operate = (a, operator , b) => {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '%':
            return modulus(a,b);
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

//Button Selection
const button = document.querySelectorAll('input[type="button"]');
const input = document.querySelector('input[type="text"]');
document.addEventListener('keydown', e => {
    if(e.key === 'Shift'){
        console.log("ignoring shift");
        return;
    }
    if(e.key === 'Backspace') {
        clear();
    } else if (validOperator.includes(e.key)){
        console.log(e.key);
        getOperator(e.key);
    } else if (e.key === "Enter") {
        calculate()
    } else {
        console.log(typeof e.key);
        let num = e.key;
        console.log(`This is input value: ${num}`);
        getNumber(num);
    }
});

const validOperator = ['+', '-', '/', '%', '*'];

const isOperator = (str) => {
    return str === '+' || str === '%' || str === '-' || str ==='*'
            || str === '/';
}

const isClear = (str) => {
    return str === 'AC';
}

const isEquals = (btn) => {
    return btn === '=';
}

const isSign = (btn) => {
    return btn === '+/-';
}

let firstNumber;
let secondNumber;
let operator;
let step = 0;
let result = 0;

let numArray = [];
let secondNumArray = [];

const getNumber = (num) => {
    if(step === 0 || step === 1){
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        input.value = firstNumber;
    } else if (step === 2){
        secondNumArray.push(num);
        secondNumber = Number(secondNumArray.join(''));
        input.value = secondNumber;
    }
    console.log(`First Number: ${firstNumber} \nSecond Number: ${secondNumber}`);
};

const getOperator = (op) => {
    step = 2;
    operator = op;
}

const clear = () => {
    input.value = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    step = 0;
    numArray = [];
    secondNumArray = [];
    console.log("Cleared all values")
}

//Should clear second number to keep chaining operations
const calculate = () => {
    result = operate(firstNumber, operator, secondNumber);
    firstNumber = result;
    secondNumber = null;
    secondNumArray = [];
    input.value = result;
}

const changeSign = () => {
    firstNumber *= -1;
    input.value = firstNumber;
}




button.forEach(btn => {
    btn.classList = "operation";
    //On Click, Add the value to form
    btn.addEventListener('click', e =>{
        // alert("oh hello!");
        // console.log("i hope this is working")
        let btnValue = btn.value
        if (!isOperator(btnValue) 
            && !isClear(btnValue) 
            && !isEquals(btnValue)
            && !isSign(btnValue)){
            console.log("This is a number");
            if(btn.value === '.'){
                document.getElementById('decimal').disabled = true;
            }
            getNumber(btnValue);
        } else if (isOperator(btnValue)){
            getOperator(btnValue);
            if(step === 2 && secondNumber != undefined) calculate();
            document.getElementById('decimal').disabled = false;
            console.log(`Operator: ${operator}`);
        } else if (isClear(btnValue)){
            clear();
        } else if (isSign(btnValue)) {
            changeSign();
        } else if (isEquals(btnValue)){
            calculate();
            console.log(result);
        }
    })
});






