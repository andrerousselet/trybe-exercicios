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
      marguerita: {
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
  const funcionario = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const tel = order.phoneNumber;
  const endereço = `${order.address.street}, nº ${order.address.number} / ap ${order.address.apartment}`;
  return `Olá ${funcionario}, entrega para: ${cliente}, Telefone: ${tel}, ${endereço}`;
}

console.log(customerInfo(order));;

const orderModifier = (order) => {
  const novoCliente = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const valor = order.payment.total = 50;
  return `Olá ${novoCliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${valor},00.`;
}

console.log(orderModifier(order));