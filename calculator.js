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

let entryOne=null;
let operator=null; 
let entryTwo=null;

function operate() {
    console.log(operator(entryOne, entryTwo))
    return operator(entryOne, entryTwo)
    //when user presses '=' (works)
    //also should be called when __a + operator + b___  sequence is specified
    //needs also to round N°s with infinite decimals
}


////AC (clear all)
function clear() {
    entryOne=null;
    operator=null;
    entryTwo=null;
}

const ac = document.querySelector('#clear')
ac.addEventListener('click', () => {
  clear()
})

/////Display
let display = document.querySelector('#display')



///////button event listeners
const digits = document.querySelectorAll('.digits')
digits.forEach((button) => {
  button.addEventListener("click", () => {
    entryOne != null && 
    operator != null ? entryTwo=Number(button.textContent) : entryOne=Number(button.textContent)
    console.log(`entry one - ${entryOne}; entry two - ${entryTwo}`);    
    })
});

const operators = document.querySelectorAll('.operators')
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id ==='plus') {
            operator = add
        } else if (button.id === 'minus') {
            operator = minus
        } else if (button.id === 'divide') {
            //entryOne!= null && entryTwo==0 ? console.log('Error') : //doesn't work, goes into operate()?
             operator = divide
        } else if (button.id === 'multiply') {
            operator = multiply
        } else if (button.id === 'equal') {
            entryOne==null || operator==null || 
            entryTwo==null ? console.log('Error') : operate()
        }
        console.log(operator)
    })
})