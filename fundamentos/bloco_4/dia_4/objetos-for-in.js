// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log('Bem-Vinda, ' + info.personagem)

//   2. Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

for (let i in info) {
    console.log(info)
}

// 3.Faça um for/in que mostre todas as chaves do objeto.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

for (let i in info) {
    console.log(i)
}

// 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

for (let i in info) {
    console.log(info[i])
}

// 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };


let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Deils Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};


for (let ind in info) {
    if (info.recorrente === "Sim"){
        console.log("Ambos recorrentes")
    }
console.log(info[ind], info2[ind])
}