/*
============================================
; Title:  exercise-1.4.js
; Author: Cory Gilliam
; Date:   6 Aug 2019
; Modified By:
; Description: Create a car object
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 1.4'));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
/**
 * Create Car objects
 * @param {string} model
 */
function Car(model) {
  this.model = model;
}

/**
 * Start function for the Car class
 */
Car.prototype.start = function () {
  console.log('Car added to the racetrack!');
}

/**
 * Create Truck objects
 * @param {string} model
 * @param {int} year
 */
function Truck(model, year) {
  this.model = model;
  this.year  = year;
}

/**
 * Start function for the Truck class
 */
Truck.prototype.start = function () {
  console.log('Truck added to the racetrack!');
}

/**
 * Create Jeep objects
 * @param {string} model
 * @param {int} year
 * @param {string} color
 */
function Jeep(model, year, color) {
  this.model = model;
  this.year  = year;
  this.color = color;
}

/**
 * Start function for the Jeep class
 */
Jeep.prototype.start = function () {
  console.log('Jeep added to the racetrack!');
}

var racetrack = [];

/**
 * Add object to the racetrack array, call object's start function
 * @param {obj} vehicle
 */
function driveIt(vehicle) {
  racetrack.push(vehicle);
  vehicle.start();
}

// Create three vehicle classes
var car   = new Car('Corvette');
var truck = new Truck('S-10', 2019);
var jeep  = new Jeep('Wrangler', 2005, 'Rust');

driveIt(car);
driveIt(jeep);
driveIt(truck);

console.log('\n -- The following vehicles have been added to the racetrack --');

// Iterate over the racetrack array
for(var i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ': ' + racetrack[i].model);
}

// end program
