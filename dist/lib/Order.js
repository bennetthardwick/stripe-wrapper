"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(customer) {
        this._order = {
            currency: null
        };
        this._order.customer = customer.id;
        this._customer = customer;
    }
    /**
     * Create an item that can be added to the order.
     * @param item: orders.IOrderItemCreationHash - Item to be added to the order.
     */
    Order.prototype.item = function (item) {
        return new OrderItem(this, item);
    };
    /**
     * Add an item to the order.
     * @param item: orders.IOrderItemCreationHash - Item which will be added to the order.
     */
    Order.prototype.addItem = function (item) {
        this._order.items.push(item);
        return this;
    };
    /**
     * Process the order.
     */
    Order.prototype.process = function () {
        return this._customer;
    };
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem(order, item) {
        this._item = {
            parent: null
        };
        this._order = order;
        if (item)
            Object.assign(this._item, item);
    }
    /**
     * Set the amount of the order item.
     * @param amount: number - Smallest unit of a currency.
     */
    OrderItem.prototype.amount = function (amount) {
        this._item.amount = amount;
        return this;
    };
    /**
     * Set the ID or SKU of the order item.
     * @param parent: string - ID or SKU being ordered.
     */
    OrderItem.prototype.parent = function (parent) {
        this._item.parent = parent;
        return this;
    };
    /**
     * Set the 3-letter ISO code of the order. E.g. "usd".
     * @param currency: string - Currency of the order item.
     */
    OrderItem.prototype.currency = function (currency) {
        this._item.currency = currency;
        return this;
    };
    /**
     * Set the description of the order item.
     * @param description: string - The order item description.
     */
    OrderItem.prototype.description = function (description) {
        this._item.description = description;
        return this;
    };
    /**
     * Set the quantity of this order item.
     * @param quantity: number - Quantity of order item.
     */
    OrderItem.prototype.quantity = function (quantity) {
        this._item.quantity = quantity;
        return this;
    };
    /**
     * Set the type of order item.
     * @param type: "sku" | "tax" | "shipping" | "discount" - Type of order item.
     */
    OrderItem.prototype.type = function (type) {
        this._item.type = type;
        return this;
    };
    /**
     * Set various options of the order item.
     * @param item: orders.IOrderItemCreationHash - Object containing the order item options.
     */
    OrderItem.prototype.options = function (item) {
        Object.assign(this._item, item);
        return this;
    };
    /**
     * Add the item to the order and return the order.
     */
    OrderItem.prototype.add = function () {
        this._order.addItem(this._item);
        return this._order;
    };
    return OrderItem;
}());
exports.OrderItem = OrderItem;
