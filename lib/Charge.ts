import { stripe } from './Stripe';
import { charges, IResponseFn } from 'stripe';
import { Customer } from './Customer';

export class Charge {
  
  private customer: Customer;
  private source: string;

  private _charge: charges.IChargeCreationOptions = {
    amount: 1000,
    currency: 'usd',
  };

  constructor(source: string, customer?: Customer) {
    if (customer) this._charge.customer = customer.id;
    if (source) this._charge.source = source;
    this._charge.source = source;
    this._charge.currency = "usd";
  }

  /**
   * Set the amount to be charged.
   * @param amount: number - Value of the transaction in cents.
   */
  amount(amount: number): Charge {
    this._charge.amount = amount;
    return this;
  }

  /**
   * Set the desired currency of the transaction.
   * @param currency: string [usd] - Three-letter ISO currency code. 
   */
  currency(currency: string): Charge {
    this._charge.currency = currency;
    return this;
  }

  /**
   * Set the description of the transaction.
   * @param description: string - Description of the transaction.
   */
  description(description: string): Charge {
    this._charge.description = description;
    return this;
  }

  /**
   * Set various options of the transaction
   * @param options: charges.IChargeCreationOptions - Object containing the transaction options.
   */
  options(options: charges.IChargeCreationOptions) {
    this._charge = Object.assign<charges.IChargeCreationOptions, charges.IChargeCreationOptions>(this._charge, options);
    return this;
  }

  /**
   * Process the transaction
   * @param callback: IResponseFn<charges.ICharge> - Callback to be executed after the transaction has been processed
   */
  process(callback?: IResponseFn<charges.ICharge>): Customer | Charge {

    if (callback) stripe.charges.create(this._charge, callback);
    else stripe.charges.create(this._charge);

    return (this.customer) ? this.customer : this;

  }
  
}