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

//Using functions, create a cell phone object with the following properties / methods
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  }

CellPhone.prototype.getPrice = function () {
  return this.price;
};

CellPhone.prototype.getModel = function () {
  return this.model;
};

CellPhone.prototype.getDetails = function () {
  return 'Manufacturer: ' + this.manufacturer + '\nModel: ' + this.getModel() + '\nColor: ' + this.color + '\nPrice: $' + this.getPrice();
};

var myPhone = new CellPhone('Apple', 'iPhone X S Max', 'Rose Gold', 1099.00);
var yourPhone = new CellPhone('Samsung', 'Galaxy S10', 'Black', 749.99);
console.log(myPhone.getDetails());
console.log(yourPhone.getDetails());
