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
console.log(verificaPalindromo("arara"));
