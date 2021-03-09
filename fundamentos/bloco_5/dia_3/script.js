function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//   Exercício - 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function criaDias() {
    let listaDias = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dias = dezDaysList[index];
        let itemLista = document.createElement('li');

        switch (true) {
            case (dias === 24 || dias === 31):
                itemLista.className = 'day holiday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            case (dias === 4 || dias === 11 || dias === 18):
                itemLista.className = 'day friday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            case (dias === 25):
                itemLista.className = 'day holiday friday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            default:
                itemLista.innerHTML = dias;
                itemLista.className = 'day';
                listaDias.appendChild(itemLista);
        }
    };
};
criaDias();

// Execício - 2

function criaBotãoFeriados(nome) {
    let container = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    let idbotao = 'btn-holiday';

    botao.innerHTML = nome;
    botao.id = idbotao;
    container.appendChild(botao);
}
criaBotãoFeriados('Feriados');

// Execício - 3

function mudaCorFeriados() {
    let corClick = 'green';
    let clickCor = 'rgb(238,238,238)';
    let pegaIdBotao = document.querySelector('#btn-holiday');
    let pegaFeriados = document.querySelectorAll('.holiday');

    pegaIdBotao.addEventListener('click', function(){
        for (let index = 0; index < pegaFeriados.length; index += 1){
            if (pegaFeriados[index].style.backgroundColor == corClick) {
                pegaFeriados[index].style.backgroundColor = clickCor;
            } else {
                pegaFeriados[index].style.backgroundColor = corClick;
            }
        }
    })
};
mudaCorFeriados();

// Execício - 4

function criaBotãoSexta(nome) {
    let container = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    let idbotao = 'btn-friday';

    botao.innerHTML = nome;
    botao.id = idbotao;
    container.appendChild(botao);
}
criaBotãoSexta('Sexta-Feira');