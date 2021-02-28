// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
let a = 8;
let b = 28;

console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(b / a);
console.log(b % a);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let number1 = 25;
let number2 = 40;

if (number1 > number2) {
    console.log("Number1 maior que number2")
} else {
    console.log("Number2 maior que number1")
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let number3 = 100;
let number4 = 45;
let number5 = 60;

if (number3 > number4 && number3 > number5) {
    console.log("O maior número é: " + number3)
} else if (number4 > number3 && number4 > number5){
    console.log("O maior número é: " + number4)
} else {
    console.log("O maior número é: " + number5)
}