import { OrderStatus } from './interfaces/order-status';
import { CurstomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shoppingCartProtocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { PaymentProtocol } from './interfaces/payment-protocol';
import { PaymentServer } from '../services/paymentServer';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //
  private paymentServer = new PaymentServer();
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CurstomerOrder,
    private readonly payment: PaymentProtocol,
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
    console.log(this.payment.getData());
    console.log(
      this.paymentServer.send(
        this.payment.getData(),
        this.cart.totalWithDicount(),
      ),
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
