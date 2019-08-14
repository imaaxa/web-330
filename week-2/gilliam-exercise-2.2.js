/*
============================================
; Title:  exercise-2.2.js
; Author: Cory Gilliam
; Date:   13 Aug 2019
; Modified By:
; Description: Create a cell phone object
;===========================================
*/

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 1.3'));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// Start program
var Person = {
  getAge: function() {
    console.log('The person\'s age is ' + this.age);
  }
};

var bob = Object.create(Person, {
  'age': {
    'value': 28,
    enumerable: true
  },
  'name': {
    'value': 'Bob Smith'
  }
});

// Output
console.log('The person\'s full name is ' + bob.name);
bob.getAge();
// end program
