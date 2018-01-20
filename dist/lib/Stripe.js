"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IStripe = require("stripe");
exports.stripe = null;
var hi = new IStripe("sa");
/**
  * This function initialises the wrapper and must be called before use
  * @param key {string} - Stripe private key
 */
function Stripe(key) {
    return exports.stripe = new IStripe(key);
}
exports.Stripe = Stripe;
