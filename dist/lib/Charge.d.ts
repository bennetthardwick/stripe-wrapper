import { charges, IResponseFn } from 'stripe';
import { Customer } from './Customer';
export declare class Charge {
    private customer;
    private source;
    private _charge;
    constructor(source: string, customer?: Customer);
    /**
     * Set the amount to be charged.
     * @param { amount: number } - Value of the transaction in cents.
     */
    amount(amount: number): Charge;
    /**
     * Set the desired currency of the transaction.
     * @param { currency: string } [usd] - Three-letter ISO currency code.
     */
    currency(currency: string): Charge;
    /**
     * Set the description of the transaction.
     * @param { description: string } - Description of the transaction.
     */
    description(description: string): Charge;
    /**
     * Set various options of the transaction
     * @param { options: charges.IChargeCreationOptions } - Object containing the transaction options.
     */
    options(options: charges.IChargeCreationOptions): this;
    /**
     * Process the transaction
     * @param { callback: IResponseFn<charges.ICharge> } - Callback to be executed after the transaction has been processed
     */
    process(callback?: IResponseFn<charges.ICharge>): Customer | Charge;
}
