"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var visa = 'tok_visa';
var visaDebit = 'tok_visa_debit';
var masterCard = 'tok_mastercard';
var stripe = index_1.Stripe('sk_test_1yYCI7FCsnsbJMti6mJfF1VL');
var charge = new index_1.Charge(visa);
charge.amount(1000)
    .currency('usd')
    .description('Example')
    .process();
var customer = new index_1.Customer();
