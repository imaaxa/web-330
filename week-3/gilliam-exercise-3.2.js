/*
============================================
; Title:  exercise-3.2.js
; Author: Cory Gilliam
; Date:   21 Aug 2019
; Modified By:
; Description: Use the factory pattern to create new objects
;===========================================
*/

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 3.2'));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

/**
 * Creator for the Postgres object
 *
 * {array} Contains properties needed by object
 */
function Postgres(properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 's3cret';
    this.server = properties.server || 'localhost:5432';
}

/**
 * Creator for the MySql object
 *
 * {array} Contains properties needed by object
 */
function MySql(properties) {
    this.username = properties.username || 'ca-admin';
    this.password = properties.password || 'ca-s3cret';
    this.server = properties.server || 'localhost:8000';
    this.version = properties.version || 5.7
}

/**
 * Creator for the Oracle object
 *
 * {array} Contains properties needed by object
 */
function Oracle(properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 's3cret';
    this.server = properties.server || 'localhost:5432';
    this.version = properties.version || 5.7
}

/**
 * Creator for the Informix object
 *
 * {array} Contains properties needed by object
 */
function Informix(properties) {
    this.username = properties.username || 'ca-admin';
    this.password = properties.password || 'ca-s3cret';
    this.server = properties.server || 'localhost:8000';
}

// Factory object
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  // Determine which database class to use to create new object
  switch (properties.databaseType) {
    case 'Postgres':
      this.databaseClass = Postgres;
      break;

    case 'Oracle':
      this.databaseClass = Oracle;
      break;

    case 'Informix':
      this.databaseClass = Informix;
      break;

    default:
      this.databaseClass = MySql;
      break;
  }

  // Create new object and return the instance
  return new this.databaseClass(properties);
};

// Create postgres object
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: 'Postgres',
    username: 'admin',
    password: 'SuperSecret'
});

// Create mySql object
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: 'default',
    password: 'password'
});

// Create oracle object
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: 'oracle-admin',
  password: 'SuperSecret4Oracle',
  server: 'localhost:8080',
  version: '10.2.0.5'

});

// Create informix object
// Create informix object
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: 'informix-admin',
  password: '12345',
  server: 'localhost:3000'
});

// Output
console.log('Oracle {\n  username: ' + oracle.username + ',\n  password: ' + oracle.password + ',\n  server: ' + oracle.server + ',\n  version: ' + oracle.version + '\n}\n');
console.log('Informix {\n  username: ' + informix.username + ',\n  password: ' + informix.password + ',\n  server: ' + informix.server + '\n}\n');
// end program
