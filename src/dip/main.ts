import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  //NoDiscount,
  //TenPercentDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';
import {
  BoletoPayment,
  CreditCardPayment,
  PixPayment,
} from './classes/payment';
import {
  BoletoProtocol,
  CreditCardProtocol,
} from './classes/interfaces/payment-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Roni',
  'Oliveira',
  '123-3232-3112',
);
const enterpriseCustomer = new EnterpriseCustomer('RoniLoggi', '232123-132131');
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('A mensagem do mock');
  }
}
const payment = new PixPayment('31231231', '31231231');

const Card: CreditCardProtocol = {
  numero: '4111111111111111',
  validade: {
    month: 10,
    year: 2028,
  },
  ccv: 123,
};
const Boleto: BoletoProtocol = {
  codigoDeBarras: 4111111111111111,
  validade: {
    day: 12,
    month: 10,
    year: 2026,
  },
  cpf: '123',
};
const paymentCard = new BoletoPayment(
  Boleto.codigoDeBarras,
  Boleto.validade,
  Boleto.cpf,
);
const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
  paymentCard,
);

shoppingCart.addItem(new Product('Tenis', 149.99));
shoppingCart.addItem(new Product('Caderno', 29.99));
shoppingCart.addItem(new Product('Mochila', 49.99));

console.log(shoppingCart.items, 'Total: ' + shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
