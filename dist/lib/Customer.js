"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Charge_1 = require("./Charge");
var Customer = /** @class */ (function () {
    function Customer(source) {
    }
    Customer.prototype.source = function (source) {
        this._customer.source = source;
        return this;
    };
    Customer.prototype.email = function (email) {
        this._customer.email = email;
        return this;
    };
    Customer.prototype.description = function (description) {
        this._customer.description = description;
        return this;
    };
    Customer.prototype.createCharge = function () {
        return new Charge_1.Charge(null, this);
    };
    return Customer;
}());
exports.Customer = Customer;
