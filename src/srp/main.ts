import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Tenis', 149.99));
shoppingCart.addItem(new Product('Caderno', 29.99));
shoppingCart.addItem(new Product('Mochila', 49.99));

console.log(shoppingCart.items, 'Total: ' + shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
