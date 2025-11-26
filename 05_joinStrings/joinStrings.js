/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
var firstName = "Carlos";
var lastName = "Stevenson";
var thisYear = 1965;
var birthYear = 1947;

var greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

fullName = firstName + " " + lastName;
age = thisYear - birthYear;

greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;
console.log(greeting);


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
