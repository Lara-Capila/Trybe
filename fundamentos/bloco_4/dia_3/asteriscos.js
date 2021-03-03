// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;
let asterisco = '*';
let espaco = "";

for (let i = 0; i <= n; i +=1) {
  espaco = espaco + asterisco;
};

for (let i = 0; i <= n; i +=1) {
  console.log (espaco);
};

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


let quantAste = 5;
let aste = '*';
let espaco = '';

for (let index = 0; index <= quantAste; index += 1) {
  console.log(espaco);
  espaco = espaco + aste;
};

