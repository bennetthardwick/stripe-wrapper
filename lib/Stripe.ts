import * as IStripe from 'stripe';
export var stripe = null;

/**
  * This function initialises the wrapper and must be called before use
  * @param key: string - Stripe private key
 */
export function Stripe(key: string): IStripe {
  return stripe = new IStripe(key);
} 