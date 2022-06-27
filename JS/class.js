// Classes

// Example of Using Class Syntax
class Cookie {
  constructor() {
    (this.temp = "warm"), (this.flavor = "chocolate chip");
  }

  bakeCookie() {
    console.log(`I am baking a ${this.temp} ${this.flavor} cookie!`);
  }
}

const myCookie = new Cookie();
myCookie.bakeCookie();

// Example of creating a reusable object with class syntax

class Pizza {
  constructor(size, type) {
    (this._location = "Dahlilas Pizzaria"),
      (this._size = size),
      (this._type = type),
      (this._toppings = []);
  }
  getLocation() {
    return this._location;
  }
  setLocation(location) {
    this._location = location;
  }

  getToppings() {
    return this._toppings;
  }

  setToppings(toppings) {
    this._toppings.push(toppings);
  }

  newOrder() {
    console.log(
      `Welcome to ${this._location}, today we have ${this._size} ${this._type} pizza on sale.`
    );
  }
}

const pizza1 = new Pizza("large", "cheese");
pizza1.setLocation("Daisys's Pizzaria");
pizza1.newOrder();
console.log(pizza1.getLocation());

pizza1.setToppings("pinapple");
pizza1.setToppings("olives");
pizza1.setToppings("jalepenos");
console.log(pizza1.getToppings());

// Add a subclass/child class

class SpecialPizza extends Pizza {
  constructor(size) {
    super(size);
    this._type = "Meat Lovers";
  }
  slice() {
    console.log(`Our ${this._type} ${this._size} pizza has 8 HUGE slices`);
  }
}

const pizza2 = new SpecialPizza("Extra large");
pizza2.slice();

// Factory Function
function milkshake(portionSize, shakeFlavor) {
  const portion = portionSize;
  const flavor = shakeFlavor;
  const toppings = "Whip Cream";
  return {
    serve: () =>
      console.log(
        `Now making a ${portion} ${flavor} milkshake with ${toppings}`
      ),
  };
}

const shake1 = milkshake("medium", "chocolate");

shake1.serve();

// The difference between class and function
// Factory function is a solution that allows you to have privacy with function

// New Updated version with Javascript classes with public and private classes

class Burger {
  topings = "cheese";
  bun = "sesame seed";
  #meat = "beef";
  #mealSize;
  constructor(burgerSize) {
    this.#mealSize = burgerSize;
  }

  getTopings() {
    return this.topings;
  }

  setTopings(pizzaTopings) {
    this.topings = pizzaTopings;
  }

  burgerOrder() {
    console.log(
      `We are making you a  ${this.#mealSize} ${this.#meat}  on a ${
        this.bun
      } with ${this.topings} toppings.`
    );
  }
}

const burger1 = new Burger("large");
burger1.setTopings("jalepenos");
burger1.burgerOrder();
