let select = document.getElementById('select');
let input = document.getElementById('input1');
let errorMsg = document.getElementById('error-msg');
let output = document.getElementById('input2');
let submit = document.getElementById('submitButton');
let reset = document.getElementById('resetButton');


function EvaluateResult(inputTemp, inputSize) {
    let outputTemp = select.value;
    let tempValue = parseInt(input.value.slice(0, inputSize-1));
    if(inputTemp === 'C' || inputTemp === 'c') {
        switch (outputTemp) {
            case 'Celcius':
                output.value = tempValue;
                break;
            case 'Farenhit':
                output.value = 9/5 * (tempValue) + 32;
                break;
            case 'Kelvin':
                output.value = (tempValue) + 273.15;
                break;
        }
    }
    else if(inputTemp === 'F' || inputTemp === 'f') {
        switch(outputTemp) {
            case 'Celcius':
                output.value = (tempValue - 32) * 5/9;
                break;
            case 'Farenhit':
                output.value = tempValue;
                break;
            case 'Kelvin':
                output.value = (tempValue - 32) * 5/9 + 273.15;
                break;
        }
    }
    else if(inputTemp === 'K' || inputTemp === 'k') {
        switch(outputTemp) {
            case 'Celcius':
                output.value = tempValue - 273.15;
                break;
            case 'Farenhit':
                output.value = (tempValue - 273.15) * 9/5 + 32;
                break;
            case 'Kelvin':
                output.value = tempValue;
                break;
        }
    }
}


submit.addEventListener('click', () => {
    let inputSize = input.value.length;
    let inputTemp = input.value[inputSize-1];
    if(input.value === '') {
        alert('Enter a Valid Input');
    }
    else {
        EvaluateResult(inputTemp, inputSize);
    }
});


reset.addEventListener('click', () => {
    if(input.value === '' && output.value === '' && select.value === 'Celcius') {
        alert('All Clear Ready To Be Used !');
    } else {
        input.value = '';
        output.value = '';
        select.value = 'Celcius';
    }
});