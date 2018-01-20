import { stripe } from './Stripe';
import { charges, IResponseFn } from 'stripe';
import { Customer } from './Customer';

export class Charge {
	
	private customer: Customer;
	private source: string;

	private _charge: charges.IChargeCreationOptions;

	constructor(source: string, customer?: Customer) {
		this.customer = customer;
		this.source = source;
	}

	amount(amount: number): Charge {
		this._charge.amount = amount;
		return this;
	}

	currency(currency: string): Charge {
		this._charge.currency = currency;
		return this;
	}

	description(description: string): Charge {
		this._charge.description = description;
		return this;
	}

	options(options: charges.IChargeCreationOptions) {
		this._charge = Object.assign<charges.IChargeCreationOptions, charges.IChargeCreationOptions>(this._charge, options);
		return this;
	}

	process(callback: IResponseFn<charges.ICharge>): Customer {
		stripe.charges.create(this._charge, callback);
		return this.customer;
	}
	
}