// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let valores = 0; valores < numbers.length; valores++) {
    console.log(numbers[valores]);
}

//2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let valores = 0; valores < numbers.length; valores++) {
    soma += numbers[valores];
}

console.log(soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let adicao = 0;

for (let valores = 0; valores < numbers.length; valores++) {
    adicao += numbers[valores];
}

let subtracao = adicao / numbers.length;
console.log(subtracao);

// 4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let adicao = 0;

for (let valores = 0; valores < numbers.length; valores++) {
    adicao += numbers[valores];
}

let subtracao = adicao / numbers.length;

if (subtracao >= 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20")
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = 0;

for (let posicao = 0; posicao < numbers.length; posicao++) {
    if (numbers[posicao] > maxNumber){
        maxNumber = numbers[posicao];
    }
}

console.log(maxNumber);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impares += 1;
    }
}

if (impares === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(impares);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = 101;

for (let posicao = 0; posicao < numbers.length; posicao++) {
    if (numbers[posicao] < minNumber){
        minNumber = numbers[posicao];
    }
}

console.log(minNumber);