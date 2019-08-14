/*
============================================
; Title:  exercise-1.3.js
; Author: Cory Gilliam
; Date:   6 Aug 2019
; Modified By:
; Description: Create a cell phone object
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 1.3'));

/**
 * Create Cell Phone objects
 * @param {string} manufacturer
 * @param {string} model
 * @param {string} color
 * @param {float} price
 */
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  }

/**
 * Get Price function for the CellPhone class
 */
CellPhone.prototype.getPrice = function () {
  return this.price;
};

/**
 * Get Model function for the CellPhone class
 */
CellPhone.prototype.getModel = function () {
  return this.model;
};

/**
 * Get Details function for the CellPhone class
 */
CellPhone.prototype.getDetails = function () {
  return 'Manufacturer: ' + this.manufacturer + '\nModel: ' + this.getModel() + '\nColor: ' + this.color + '\nPrice: $' + this.getPrice();
};

var myPhone = new CellPhone('Apple', 'iPhone X S Max', 'Rose Gold', 1099.00);

console.log(myPhone.getDetails());
// end program
