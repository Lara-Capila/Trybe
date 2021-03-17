window.onload = function () {
    createOptionsStatesBr ()
}

let pai = document.getElementById('state');
function createOptionsStatesBr () {
    let statesOfBr = ['Selecione seu estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];

    for(let index = 0; index < statesOfBr.length; index += 1) {
        let createOption = document.createElement('option');
        pai.appendChild(createOption).innerText = statesOfBr[index];
    }
}
// Validações

function interruptsBtn () {
    let btnSubmit = document.getElementById('send-btn');

    btnSubmit.addEventListener('click', function(event){
        alert('Formulário enviado com sucesso. Boa sorte!')
        event.preventDefault()
    });
}
