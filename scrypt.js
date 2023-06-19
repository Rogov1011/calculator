let calc = document.querySelector('.calc');

let result = document.querySelector('#result');

calc.addEventListener('click', function(_event){
    if(!_event.target.classList.contains('calc__btn')) return;

    let value = _event.target.innerText;

    switch (value) {
        case 'C':
            result.innerText = ' ';
            break;

        case '=':
            result.innerText = eval(result.innerText). toFixed(2);
            break;
            
        default:
            result.innerText += value;
    

    }



});