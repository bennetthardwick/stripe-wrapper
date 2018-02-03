import * as IStripe from 'stripe';
export declare var stripe: any;
/**
  * This function initialises the wrapper and must be called before use
  * @param key: string - Stripe private key
 */
export declare function Stripe(key: string): IStripe;
