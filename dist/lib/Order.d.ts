import { orders } from 'stripe';
import { Customer } from './Customer';
export declare class Order {
    private _order;
    private _customer;
    constructor(customer: Customer);
    /**
     * Create an item that can be added to the order.
     * @param item: orders.IOrderItemCreationHash - Item to be added to the order.
     */
    item(item?: orders.IOrderItemCreationHash): OrderItem;
    /**
     * Add an item to the order.
     * @param item: orders.IOrderItemCreationHash - Item which will be added to the order.
     */
    addItem(item: orders.IOrderItemCreationHash): Order;
    /**
     * Process the order.
     */
    process(): Customer;
}
export declare class OrderItem {
    private _item;
    private _order;
    constructor(order: Order, item?: orders.IOrderItemCreationHash);
    /**
     * Set the amount of the order item.
     * @param amount: number - Smallest unit of a currency.
     */
    amount(amount: number): OrderItem;
    /**
     * Set the ID or SKU of the order item.
     * @param parent: string - ID or SKU being ordered.
     */
    parent(parent: string): OrderItem;
    /**
     * Set the 3-letter ISO code of the order. E.g. "usd".
     * @param currency: string - Currency of the order item.
     */
    currency(currency: string): OrderItem;
    /**
     * Set the description of the order item.
     * @param description: string - The order item description.
     */
    description(description: string): OrderItem;
    /**
     * Set the quantity of this order item.
     * @param quantity: number - Quantity of order item.
     */
    quantity(quantity: number): OrderItem;
    /**
     * Set the type of order item.
     * @param type: "sku" | "tax" | "shipping" | "discount" - Type of order item.
     */
    type(type: "sku" | "tax" | "shipping" | "discount"): OrderItem;
    /**
     * Set various options of the order item.
     * @param item: orders.IOrderItemCreationHash - Object containing the order item options.
     */
    options(item: orders.IOrderItemCreationHash): OrderItem;
    /**
     * Add the item to the order and return the order.
     */
    add(): Order;
}
