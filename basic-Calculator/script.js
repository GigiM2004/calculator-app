const buttonsEl = document.querySelectorAll("button");
const inputFiealdEl = document.getElementById("result")

for(let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        } else if(buttonValue === "="){
            calculateResult();
        } else if(buttonValue === "d"){
            deleteLastChar();
        }
        
        else{
            appandValue(buttonValue);
        }
    })
}



function clearResult() {
    inputFiealdEl.value = ""
}
function calculateResult() {
    try {
        inputFiealdEl.value = eval(inputFiealdEl.value);
    } catch (error) {
        inputFiealdEl.value = "Error";
    }
}

function appandValue(buttonValue) {
   inputFiealdEl.value += buttonValue 
}

function deleteLastChar() {
    const currentValue = inputFiealdEl.value;
    if (currentValue.length > 0) {
        inputFiealdEl.value = currentValue.slice(0, -1);
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appandValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearResult();
    }
});