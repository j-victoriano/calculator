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

//Button Selection
const button = document.querySelectorAll('input[type="button"]');
const input = document.querySelector('input[type="text"]');
button.forEach(btn => {
    btn.classList = "operation";
    //On Click, Add the value to form
    btn.addEventListener('click', e =>{
        // alert("oh hello!");
        // console.log("i hope this is working")
        let buttonValue = btn.value;
        input.value += buttonValue;
        console.log(input.value);
    })
});


