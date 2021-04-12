// PARTE 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
}

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
}

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShiftMorning = (object, key, value) => {
  object[key] = value;
}

addShiftMorning(lesson2, 'Truno', 'manhã' )
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => Object.keys(object);
console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectSize = object => Object.keys(object).length
console.log(objectSize(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValue = object => Object.values(object)
console.log(objectValue(lesson2));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberTotalStudents = object => {
  const studantsLesson1 = object.lesson1.numeroEstudantes;
  const studantsLesson2 = object.lesson2.numeroEstudantes;
  const studantsLesson3 = object.lesson3.numeroEstudantes;
  const soma = studantsLesson1 + studantsLesson2 + studantsLesson3;
  return soma;
}
console.log(numberTotalStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const keyValue = (obj, position) => Object.values(obj)[position]
console.log(keyValue(lesson1, 3));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  const arrayPairs = Object.entries(obj);
  let equal = false;
  for (let index in arrayPairs) {
    if (arrayPairs[index][0] === key && arrayPairs[index][1] === value) equal = true
  }
  return equal;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
