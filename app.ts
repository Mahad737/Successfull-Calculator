const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const AddBtn = document.getElementById("Add") as HTMLInputElement
const SubBtn = document.getElementById("Sub") as HTMLInputElement
const MultBtn = document.getElementById("Mult") as HTMLInputElement
const DivBtn = document.getElementById("Div") as HTMLInputElement

const printResult = document.getElementById("result") as HTMLInputElement

function AddNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;

    printResult.textContent = result.toString()
}
AddBtn.addEventListener("click",AddNumbers)

function SubtractNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;

    printResult.textContent = result.toString()
}
SubBtn.addEventListener("click",SubtractNumbers)

function MultiplyNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;

    printResult.textContent = result.toString()
}
MultBtn.addEventListener("click",MultiplyNumbers)

function DivideNumbers(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;

    printResult.textContent = result.toString()
}
DivBtn.addEventListener("click",DivideNumbers)
