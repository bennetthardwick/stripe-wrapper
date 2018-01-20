import * as IStripe from 'stripe';
export var stripe = null;

/**
  *	This function must be called before using methods from the wrapper
  * @param key {string} - Stripe private key
 */
export function Stripe(key: string): IStripe {
	return stripe = new IStripe(key);
} 