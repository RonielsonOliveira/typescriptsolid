import {
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  cpf: string;
  lastName: string;
  constructor(firstName: string, cpf: string, lastName: string) {
    this.firstName = firstName;
    this.cpf = cpf;
    this.lastName = lastName;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
