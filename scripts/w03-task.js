/* LESSON 3 - Programming Tasks */



/* add */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value)
    let addNumber2 = Number(document.querySelector("#add2").value)

    document.querySelector("#sum").value = add(addNumber1, addNumber2)
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)



/* subtract */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value)
    let subtractNumber2 = Number(document.querySelector("#subtract2").value)

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)



/* multiply */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const multiplyNumber1 = Number(document.querySelector("#factor1").value);
    const multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)



/* divide */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector("#dividend").value)
    let divideNumber2 = Number(document.querySelector("#divisor").value)

    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2)
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)



/* Decision Structure */

function retrieveSubtotal(){
    let subtotalValue = Number(document.querySelector("#subtotal").value);
    return subtotalValue;
}

function addDicount(subtotal){
    subtotal *= 0.85
    return subtotal
}

function getTotalDue(){
    total = retrieveSubtotal();

    const memberCheckbox = document.querySelector("#member");
    if (memberCheckbox.checked){
        total = addDicount(total);
    }

    document.querySelector("#total").textContent = `$ ${total.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

/* Output Source Array */
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);