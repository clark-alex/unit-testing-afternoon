const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(cars) {
    this.cart.push(cars)
    this.total += cars.price
  },

  removeFromCart: function(num, cars) {
    this.cart.splice(num, 1)
    this.total -= cars
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};