/*
============================================
; Title:  exercise-3.3.js
; Author: Cory Gilliam
; Date:   21 Aug 2019
; Modified By:
; Description: Use the singleton pattern to create new objects
;===========================================
*/

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.3'));
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function () {
  // Holds the instance of the singleton
  var instance;

  // Creates a singleton
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  // Create or return the singleton
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Variables
function databaseSingletonTest() {
  var mySQL = DatabaseSingleton.getInstance();
  var Oracle = DatabaseSingleton.getInstance();
  console.log("Same database instance? " + (mySQL === Oracle));
}
databaseSingletonTest();

// end program
