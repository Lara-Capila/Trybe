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
    let n = [0];
    for(let i in array){
      if(n < array[i]){
          n = array[i];
      }else {
          n = n;
      }
    }
    return array.indexOf(n)
}
console.log(verificaIndice([1, 2, 3, 4,]))

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function verificaIndiceInteiros(inteiros){
    let n = [0];
    for(let i in inteiros){
      if(n > inteiros[i]){
          n = inteiros[i];
      }else {
          n = n;
      }
    }
    return inteiros.indexOf(n)
}
console.log(verificaIndiceInteiros([1, 2, 3, 4, -5]))

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes){
    let name = [0];
    for(let i in nomes){
        if(name.length < nomes[i].length){
            name = nomes[i];
        }
    }
    return name;
}
console.log(maiorNome(['Lara', 'Roberta', 'Josefina']))