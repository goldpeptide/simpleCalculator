///Operations
function add(a, b) {
    return a+b
}

function minus (a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

function divide (a, b) {
    return a/b
}

let entryOne='';
let operator=null; 
let entryTwo='';

function operate() {
    entryOne = Number(entryOne)
    entryTwo = Number(entryTwo)
    if (operator === divide && entryTwo===0) {
        clear()
        display.value = '0÷ Error'
    } else {
    result = operator(entryOne, entryTwo) 
    clear()
    display.value = result 
    entryOne = result}
    //also should be called and display current 
    // when _a + operator + b_  sequence is specified before pressing =
    //needs to round N°s with infinite decimals
}


////AC (clear all)
function clear() {
    entryOne='';
    operator=null;
    entryTwo='';
    display.value = '0'
}

const ac = document.querySelector('#clear')
ac.addEventListener('click', () => {
  clear()
})

/////Display
let display = document.querySelector('#display')
let currentValue = display.value


///////button event listeners
const digits = document.querySelectorAll('.digits')
digits.forEach((button) => {
  button.addEventListener("click", () => {
    //each value should allow multiple digit entry for longer numbers
    if (entryOne === '' || operator===null) {
        entryOne += button.textContent
        display.value = entryOne
    }
    else if (entryOne !=='' && operator!==null) {
        entryTwo += button.textContent
        display.value = entryTwo
    }
    else {display.value = 'arg missing'}
    
    console.log(`entry one - ${entryOne}; entry two - ${entryTwo}`);    
    })
});

const operators = document.querySelectorAll('.operators')
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'equal' || (entryOne !== '' 
            && entryTwo !== '' && operator !== null)) {
            operate()
            }

         if (button.id ==='plus') {
            operator = add        
            display.value = button.textContent
        } else if (button.id === 'minus') {
            operator = minus
            display.value = button.textContent
        } else if (button.id === 'divide') {
             operator = divide
             display.value = button.textContent
        } else if (button.id === 'multiply') {
            operator = multiply
            display.value = button.textContent
        } 
        console.log(operator)
    })
})