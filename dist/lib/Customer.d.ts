import { Charge } from './Charge';
export declare class Customer {
    id: string;
    private _customer;
    constructor(source?: string);
    source(source: string): Customer;
    email(email: string): Customer;
    description(description: string): Customer;
    createCharge(): Charge;
}
