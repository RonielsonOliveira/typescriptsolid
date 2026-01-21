import { OrderStatus } from './interfaces/order-status';
import { CurstomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCartProtocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CurstomerOrder,
  ) {}
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDicount()} foi recebido`,
    );

    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      'O cliente e: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
