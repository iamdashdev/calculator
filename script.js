const buttons = document.querySelectorAll('.btn');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const Input = document.getElementById('input-display');
const Output = document.getElementById('output-display');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const percent = document.getElementById('percent-btn');
const equalBtn = document.getElementById('equals-btn')
var expression = '';
//Display input on screen
operands.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        Input.innerHTML += btn.value;
    })
});

operators.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const icon = btn.querySelector('i');
        if (icon){
            Input.innerHTML  += icon.outerHTML;
        } else{
            Input.innerHTML += btn.textContent.trim();
        }
    })
});

percent.addEventListener('click', ()=>{

})
buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        expression += btn.value;
        let result = eval(expression);
        Output.innerHTML = result;
    })
})
equalBtn.addEventListener('click', ()=>{
    Input.classList.remove('emphasized')
    Input.classList.add('downplay');
    Output.classList.remove('downplay')
    Output.classList.add('emphasized');
})
function clearDisplay() {
    clearBtn.addEventListener('click', ()=>{
        Input.innerHTML = '';
        Output.innerHTML = '0.';
        expression = '';
        Input.classList.add('emphasized');
        Input.classList.remove('downplay');
        Output.classList.add('downplay');
        Output.classList.remove('emphasized');
    })
}

function deleteCharacter() {
    console.log(Input.innerHTML)
}