import {
  CurstomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CurstomerOrder
{
  firstName: string;
  cpf: string;
  lastName: string;
  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.cpf = cpf;
    this.lastName = lastName;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CurstomerOrder
{
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
