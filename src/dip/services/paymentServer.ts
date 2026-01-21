import {
  PaymentSend,
  PaymentData,
} from '../classes/interfaces/payment-protocol';

export class PaymentServer implements PaymentSend {
  //

  send(data: PaymentData, value: number): string {
    if (data.type === 'creditCard') {
      const safeJson = JSON.stringify(data.data, (key, value) =>
        key === 'ccv' ? undefined : value,
      );

      return `Pagamento de ${value.toFixed(2)} foi submetido para analise com os seguintes dados ${safeJson}`;
    }
    return `Pagamento de ${value} foi submetido para analise com os seguintes dados ${JSON.stringify(data.data)} `;
  }
}
