// PARTE 1

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nameClient = order.name;
  const tel = order.phoneNumber;
  const address = order.address.street;
  const numberAddress = order.address.number;
  const apt = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${nameClient}, Telefone: ${tel}, R. ${address}, Nº: ${numberAddress}, AP: ${apt}.`);

}

customerInfo(order);

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  const changeName = order.name = 'Luiz Silva';
  const pizzasFlavor = Object.keys(obj.order.pizza);
  const drink = order.order.drink.coke.type;
  const changePriceTotal = order.payment.total = 50; 


  console.log(`Olá ${changeName}, o total do seu pedido de ${pizzasFlavor} e ${drink} é R$ ${changePriceTotal},00.`);
}

orderModifier(order);

// PARTE 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShift = (obj, key, value) => {
  obj[key] = value;
}

addShift(lesson2, 'Truno', 'manhã' )