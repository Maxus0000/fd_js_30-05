"use strict";
const arrCorency = ["uah", "gbr", "usd"];
class Product {
  constructor(name, price, corency) {
    this.name = name;
    this.price = price;
    this.corency = corency;
    this.available = true;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value > 1000 || value < 0) {
      throw new RangeError(" must be 0...1000");
    }
    this._price = value;
  }
  set corency(value) {
    if (arrCorency.includes(value) === false) {
      throw new Error(" invalid value ");
    }
    this._corency = value;
  }
  static isProduct(obj) {
    return obj instanceof Product;
  }
}
const milk = new Product("korovka", 35, "usd");
console.log(milk);

class OnlineProduct extends Product {
  constructor(name, price, corency, delivery) {
    super(name, price, corency);
    this.delivery = delivery;
  }
}

// создать класс покупатель у которого будет сво-во кэш и метод купить товар( товар - товар и когда хватает денег)

class Buyer {
  constructor(cash) {
    this.cash = cash;
  }
  getProduct(obj) {
    if (Product.isProduct(obj)=== false) {
      throw new TypeError(' not product')
    }
    if (obj.price > this.cash) {
      throw new RangeError ( ' need more money')
    }
    if (obj.available === false) {
      throw new Error(' not availeble');
    }
    obj.available = false;
  }
}

const buyer = new Buyer(40)
buyer.getProduct(milk)
buyer.getProduct(milk)