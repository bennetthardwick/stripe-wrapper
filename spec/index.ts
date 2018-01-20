import { Stripe, Charge, Customer } from '../index';

let visa = 'tok_visa';
let visaDebit = 'tok_visa_debit';
let masterCard = 'tok_mastercard';

let stripe = Stripe('sk_...');
let charge = new Charge(visa);

charge.amount(1000)
      .currency('usd')
      .description('Example')
      .process();

let customer = new Customer()

