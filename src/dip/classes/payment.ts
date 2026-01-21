import {
  CreditCardProtocol,
  MonthYear,
  PaymentProtocol,
  PixProtocol,
  BoletoProtocol,
  PaymentData,
  DayMonthYear,
} from './interfaces/payment-protocol';

export class PixPayment implements PixProtocol, PaymentProtocol {
  cpf: string;
  pixKey: string;
  constructor(cpf: string, pixKey: string) {
    this.cpf = cpf;
    this.pixKey = pixKey;
  }
  getData() {
    const data = { cpf: this.cpf, pixKey: this.pixKey };
    return { data, type: 'pix' };
  }
}

export class CreditCardPayment implements CreditCardProtocol, PaymentProtocol {
  numero: string;
  validade: MonthYear;
  ccv: number;
  constructor(numero: string, validade: MonthYear, ccv: number) {
    this.numero = numero;
    this.validade = validade;
    this.ccv = ccv;
  }
  getData() {
    const data = {
      numero: this.numero,
      validade: this.validade,
      ccv: this.ccv,
    };
    return { type: 'creditCard', data };
  }
}

export class BoletoPayment implements BoletoProtocol, PaymentProtocol {
  codigoDeBarras: number;
  validade: DayMonthYear;
  cpf: string;
  constructor(codigoDeBarras: number, validade: DayMonthYear, cpf: string) {
    this.codigoDeBarras = codigoDeBarras;
    this.validade = validade;
    this.cpf = cpf;
  }

  getData(): PaymentData {
    const data = {
      codigoDeBarras: this.codigoDeBarras,
      validade: this.validade,
      cpf: this.cpf,
    };
    return { type: 'creditCard', data };
  }
}
