let num1 = 19
let num2 = 3
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function Add(){
    let results = num1 + num2
    sumEl.textContent = "Sum =" + results
}

function Subtract(){
   let results = num1 - num2
   sumEl.textContent = "Difference =" + results
}

function Divide(){
    let results = num1 / num2
    sumEl.textContent = "Division =" + results
}

function Multiply(){
    let results = num1 * num2
    sumEl.textContent = "Product =" + results
}

function modulars(){
    let results = num1 % num2
    sumEl.textContent = "Remainder =" + results
}