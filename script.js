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
console.log(multiply(2,3)); //6

const divide = (a,b) => {
    return a/b;
}
console.log(divide(6,2)); //3

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

const isOperator = (str) => {
    return str === '+' || str === '%' || str === '-' || str ==='*'
            || str === '/';
}

const isClear = (str) => {
    return str === 'AC';
}

let firstNumber;
let secondNumber;
let operator;
let step = 0;
let result = 0;

const numArray = [];
const secondNumArray = [];


button.forEach(btn => {
    btn.classList = "operation";
    //On Click, Add the value to form
    btn.addEventListener('click', e =>{
        // alert("oh hello!");
        // console.log("i hope this is working")
        //Lets Try Creating an Object
        let buttonValue = btn.value;
        if(!isOperator(buttonValue) && !isClear(buttonValue)){
            console.log(operator);
            // console.log(operator === null);
            if(operator === null){
                input.value += buttonValue;
                a = input.value;
                console.log("This is a value: ", a);
            } else {
                if (b === null) input.value = "";
                console.log(input.value);
                input.value += buttonValue;
                b = input.value;
                console.log("This is b value: ", b);                
            }
        } else if (isClear(buttonValue)){
            const clear = document.querySelector("#clear");
            clear.addEventListener('click', e => {
                input.value = "";
                console.log("Cleared Values in memory");
            });
        } else if (isOperator(buttonValue)) {
            operator = buttonValue;
            console.log(operator);
            console.log("This is an operand ", operator);
        }
    })
});






