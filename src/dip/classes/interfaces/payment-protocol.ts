export interface PaymentData {
  type: string;
  data: object;
}
export interface MonthYear {
  month: number;
  year: number;
}
export interface DayMonthYear {
  day: number;
  month: number;
  year: number;
}

export interface PaymentProtocol {
  getData(): PaymentData;
}
export interface PaymentSend {
  send(data: object, value: number): string;
}

export interface PixProtocol {
  pixKey: string;
  cpf: string;
}

export interface CreditCardProtocol {
  numero: string;
  validade: MonthYear;
  ccv: number;
}

export interface BoletoProtocol {
  codigoDeBarras: number;
  validade: DayMonthYear;
  cpf: string;
}
