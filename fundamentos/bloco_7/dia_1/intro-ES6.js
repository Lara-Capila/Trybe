// PARTE 1

// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. Modifique a estrutura da função para que ela seja uma arrow function. Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// 2. Faça uma função que retorne o array oddsAndEvens em ordem crescente. Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arraySort = (array) => {
  const oddsAndEvensSort = array.sort((a, b) => a - b);
  return oddsAndEvensSort;
}

const arraySorted = arraySort(oddsAndEvens);
console.log(`os números ${arraySorted} se encontram ordenados de forma crescente!`);

// PARTE 2

// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
  let result = 1;

  for (let i = 1; i <= number; i += 1) {
    result = result * i;
  } 
  return result;
}

console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = (phrase) => {
  let breakWords = phrase.split(" ");
  let longerWord = 0;
  let word = "";
  for (let index = 0; index < breakWords.length; index += 1){
    if (breakWords[index].length > longerWord) {
      longerWord = breakWords[index].length;
      word = breakWords[index];
    }
  }
  return word;
}

console.log(biggestWord("Eu amo ser uma Tryber"));

// EERCÍCIO 3 FOI FEITO NO HTML
// 4. Crie um código JavaScript com a seguinte especificação: Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string. Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.
const skillsList = ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub']

const haveXis = (text) => {
  // Referência tirada de https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let phrase = 'Olá x seja bem vindo!'
  return phrase.replace('x', text);
}

// console.log(haveXis('Lara'));

const skills = (function1) => {
  let skillsListSort = [];
  for (let index = 0; index < skillsList.length; index += 1) {
    skillsListSort = skillsList.sort();
  }

  let skillsListOrder = `${function1} Minhas cinco principais habilidades são: 
  ${skillsListSort[0]}
  ${skillsListSort[1]}
  ${skillsListSort[2]}
  ${skillsListSort[3]}
  ${skillsListSort[4]}`
  return skillsListOrder;
}

console.log(skills(haveXis('Lara')));