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