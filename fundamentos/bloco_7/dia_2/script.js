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
  
  const customerInfo = (order) => {
    const nameDeliveryPerson = order.order.delivery.deliveryPerson;
    const nameClient = order.name;
    const telPhone = order.phoneNumber;
    const address = order.address.street;
    const addressNumber = order.address.number;
    const apartmentNumber = order.address.apartment;
    console.log(`Olá ${nameDeliveryPerson}, entrega para: ${nameClient}, Telefone: ${telPhone}, R.${address}, Nº:${addressNumber}, AP:${apartmentNumber}`);
  
  }
  
  customerInfo(order);

  const orderModifier = (order) => {
    const changeNameClient = order.name = 'Luiz Silva';
    const pizzaMuzzarella = order.order.pizza = 'muzzarella';
    const pizzaCalabresa = order.order.pizza = 'calabresa'
    const drinkCoke = order.order.drinks.coke.type;
    const total = order.order.payment = '50';
    const convert = parseFloat(total).toFixed(2);
    console.log(`Olá ${changeNameClient} o total do seu pedido de ${pizzaMuzzarella}, ${pizzaCalabresa} e ${drinkCoke} é R$${convert}`);
  }

  orderModifier(order);

  console.log(order);