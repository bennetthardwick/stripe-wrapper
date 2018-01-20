"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stripe_1 = require("./Stripe");
var Charge = /** @class */ (function () {
    function Charge(source, customer) {
        this._charge = {
            amount: 1000,
            currency: 'usd',
        };
        if (customer)
            this._charge.customer = customer.id;
        if (source)
            this._charge.source = source;
        this._charge.source = source;
        this._charge.currency = "usd";
    }
    /**
     * Set the amount to be charged.
     * @param { amount: number } - Value of the transaction in cents.
     */
    Charge.prototype.amount = function (amount) {
        this._charge.amount = amount;
        return this;
    };
    /**
     * Set the desired currency of the transaction.
     * @param { currency: string } [usd] - Three-letter ISO currency code.
     */
    Charge.prototype.currency = function (currency) {
        this._charge.currency = currency;
        return this;
    };
    /**
     * Set the description of the transaction.
     * @param { description: string } - Description of the transaction.
     */
    Charge.prototype.description = function (description) {
        this._charge.description = description;
        return this;
    };
    /**
     * Set various options of the transaction
     * @param { options: charges.IChargeCreationOptions } - Object containing the transaction options.
     */
    Charge.prototype.options = function (options) {
        this._charge = Object.assign(this._charge, options);
        return this;
    };
    /**
     * Process the transaction
     * @param { callback: IResponseFn<charges.ICharge> } - Callback to be executed after the transaction has been processed
     */
    Charge.prototype.process = function (callback) {
        Stripe_1.stripe.charges.create(this._charge, callback);
        if (this.customer)
            return this.customer;
        else
            return this;
    };
    return Charge;
}());
exports.Charge = Charge;
