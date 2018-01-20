import { customers } from 'stripe';
import { Charge } from './Charge';

export class Customer {

  public id: string;

  private _customer: customers.ICustomerCreationOptions;

  constructor(source?: string) {
      
  }

  source(source: string): Customer {
    this._customer.source = source;
    return this;
  }

  email(email: string): Customer {
    this._customer.email = email;
    return this;
  }

  description(description: string): Customer {
    this._customer.description = description;
    return this;
  }

  createCharge() {
    return new Charge(null, this);
  }

}