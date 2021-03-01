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

// 4.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// let parOuImpar = "21";

if (parOuImpar > 0) {
    console.log('positive')
} else if (parOuImpar < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = "60";
let angulo2 = "50";
let angulo3 = "60";
let soma = angulo1 + angulo2 + angulo3;
let par = angulo1 > 0 && angulo2 > 0 && angulo3;

if(par){
if (soma == 180) {
    console.log('true');
} else {
    console.log('false');
};
} else {
    console.log("Erro: ângulo inválido");
}

// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "Rainha";

switch (peca.toLowerCase()) {
    case "rei":
        console.log("Horizontal, Vertical e Diagonal uma casa por vez");
        break;
    
    case "rainha":
        console.log("Horizontal, Vertical e Diagonal sem pular outras peças");
        break;

    case "bispo":
        console.log("Diagonal");
        break;

    case "cavalo":
        console.log("Duas casas no sentido horizontal e uma na vertical");
        break;

    case "torre":
        console.log("Vertical e Horizontal");
        break;

    case "peão":
        console.log("Somente para frente");
        break;
    
    default:
        console.log("Peça inválida");
}

// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = -85;


switch (nota) {
    case (nota >= 90 ? nota : null):
        console.log("A");
        break;

    case (nota >= 80 ? nota : null):
        console.log("B");
        break;

    case (nota >= 70 ? nota : null):
        console.log("C");
        break;

    case (nota >= 60 ? nota : null):
        console.log("D");
        break;

    case (nota >= 50 ? nota : null):
        console.log("E");
        break;

    case (nota < 50 && nota > 0 ? nota : null):
        console.log("F");
        break;

    case (nota < 0 || nota > 100 ? nota : null):
        console.log("Erro: Nota inválida");
        break;
}

// ou assim

let note = -40;

if (note >= 90) {
    console.log("A");
} else if (note >= 80) {
    console.log("B");
} else if (note >= 70) {
    console.log("C");
}else if (note >= 60) {
    console.log("D");
} else if (note >= 50) {
    console.log("E");
} else if (note < 50 && note > 0) {
    console.log("F");
} else {
    console.log("Erro: Nota inválida")
}

// 8.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let firstNumb = 55;
let secondNumb = 35;
let thirdNumber = 27;

if (firstNumb % 2 === 0 || secondNumb % 2 === 0 || thirdNumber % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// 9.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let firstNumb = 57;
let secondNumb = 31;
let thirdNumber = 25;

if (firstNumb % 2 !== 0 || secondNumb % 2 !== 0 || thirdNumber % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}