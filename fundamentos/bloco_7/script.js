// EXECÍCIO 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  } 
}

testingScope(true);

// EXERCÍCIO 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensSort = array => {
  // RefeRência do código abaixo https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
  const sort = array.sort((a, b) => a - b);
  return sort;
}

const order = oddsAndEvensSort(oddsAndEvens); 
console.log(`Os números ${oddsAndEvens} se encontream ordenados de forma crescente!`);