// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (palavra){
    let word = "";
    for (let i = palavra.length -1; i >= 0; i--){
        word = word + palavra.substr(i, 1);
    } 
    if (word === palavra){
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo("desenvolvimento"));


// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function verificaIndice(array){
    let n = [];
    for(let i = 0; array <= i; i++){
       n = Math.max.apply([null, array])
    }
    // return Math.max.apply(null, array)
}

console.log(verificaIndice([1, 2, 3, 4,]))