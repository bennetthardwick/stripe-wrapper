**THIS PROJECT IS CURRENTLY A WORK IN PROGRESS, VERY LIMITED FEATURES HAVE BEEN IMPLEMENTED**
***
# Fluent Interface Stripe
A TypeScript wrapper of the stripe wrapper of the stripe API following the [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) design pattern. Currently a work in progress.

## Getting Started
```typescript
import { Stripe, Charge } from './stripe-wrapper/index';

// First initialise Stripe
let stripe = Stripe('sk_test_...');

// Then create the charge
let charge = new Charge('tok_visa');
charge.amount(1000)
      .currency('usd')
      .description('Example')
      .process();
```

## Features
Currently implemented features:  
- [x] Charges  
- [ ] Customers  
- [ ] Invoices  
- [ ] Orders  
- [ ] Refunds  