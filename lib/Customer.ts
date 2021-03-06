import { customers } from 'stripe';
import { Charge } from './Charge';
import { Invoice } from './Invoice';
import { Order } from './Order';

export class Customer {

  /**
   * The customer's Stripe id
   */
  public id: string;

  private _customer: customers.ICustomerCreationOptions = { };

  constructor(source?: string) {
      if (source) this._customer.source = source;
  }

  /**
   * Set the source of the customer's payment. 
   * @param source: string - Source generated by Stripe.JS checkout
   */
  source(source: string): Customer {
    this._customer.source = source;
    return this;
  }

  /**
   * Set the customer's email address.
   * @param email: string - Customer's email address
   */
  email(email: string): Customer {
    this._customer.email = email;
    return this;
  }

  /**
   * Set the customer's description
   * @param description: string - Customer's description
   */
  description(description: string): Customer {
    this._customer.description = description;
    return this;
  }

  /**
   * Create a charge to the customer's account
   */
  createCharge(): Charge {
    //return new Charge(null, this);
    return;
  }

  /**
   * Create an order for the customer
   */
  createOrder(): Order {
    return;
  }

  /**
   * Create an invoice for the customer
   */
  createInvoice(): Invoice {
    return;
  }

}