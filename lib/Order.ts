import { orders } from 'stripe';
import { Customer } from './Customer';

export class Order {

  private _order: orders.IOrderCreationOptions = {
    currency: null
  };

  private _customer: Customer;

  constructor(customer: Customer) {
    this._order.customer = customer.id;
    this._customer = customer;
  }

  /**
   * Create an item that can be added to the order.
   * @param item: orders.IOrderItemCreationHash - Item to be added to the order.
   */ 
  item(item?: orders.IOrderItemCreationHash): OrderItem {
    return new OrderItem(this, item);
  }

  /**
   * Add an item to the order.
   * @param item: orders.IOrderItemCreationHash - Item which will be added to the order.
   */
  addItem(item: orders.IOrderItemCreationHash): Order {
    this._order.items.push(item);
    return this;
  }

  /**
   * Process the order.
   */
  process(): Customer {
    return this._customer;
  }
  
}

export class OrderItem {

  private _item: orders.IOrderItemCreationHash = {
    parent: null
  }

  private _order: Order;

  constructor(order: Order, item?: orders.IOrderItemCreationHash) {
    this._order = order;
    if (item) 
      Object.assign<orders.IOrderItemCreationHash, orders.IOrderItemCreationHash>(this._item, item);
  }

  /**
   * Set the amount of the order item.
   * @param amount: number - Smallest unit of a currency.
   */
  amount(amount: number): OrderItem {
    this._item.amount = amount;
    return this;
  }

  /**
   * Set the ID or SKU of the order item.
   * @param parent: string - ID or SKU being ordered.
   */
  parent(parent: string): OrderItem {
    this._item.parent = parent;
    return this;
  }

  /**
   * Set the 3-letter ISO code of the order. E.g. "usd".
   * @param currency: string - Currency of the order item.
   */
  currency(currency: string): OrderItem {
    this._item.currency = currency;
    return this;
  }

  /**
   * Set the description of the order item.
   * @param description: string - The order item description.
   */
  description(description: string): OrderItem {
    this._item.description = description;
    return this;
  }

  /**
   * Set the quantity of this order item.
   * @param quantity: number - Quantity of order item.
   */
  quantity(quantity: number): OrderItem {
    this._item.quantity = quantity;
    return this;
  }

  /**
   * Set the type of order item.
   * @param type: "sku" | "tax" | "shipping" | "discount" - Type of order item.
   */ 
  type(type: "sku" | "tax" | "shipping" | "discount" ): OrderItem {
    this._item.type = type;
    return this;
  }

  /**
   * Set various options of the order item.
   * @param item: orders.IOrderItemCreationHash - Object containing the order item options.
   */
  options(item: orders.IOrderItemCreationHash): OrderItem {
    Object.assign<orders.IOrderItemCreationHash, orders.IOrderItemCreationHash>(this._item, item);
    return this;
  }

  /**
   * Add the item to the order and return the order.
   */
  add(): Order {
    this._order.addItem(this._item);
    return this._order;
  }

}

