 // Data Types in JavaScript

// Variables
let name = "Awais Afzal";
let city = "Ryk";
let age = 20;
let isStudent = true;

// Output
console.log(name);
console.log(city);
console.log(age);
console.log(isStudent);

// Assigning values to variables
let a;
a = 23;
console.log(a);

// String
let firstName = "Awais";
console.log(firstName);

// Number
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

// Boolean
let isFollow2 = true;
let isStudent2 = true;

console.log(isFollow2);
console.log(isStudent2);

// Undefined
let x;
console.log(x);

// Null
let y = null;
console.log(y);

// BigInt
let bigint = 1234567890123456789012345678901234567890n;
console.log(bigint);

// Symbol
let id = Symbol("id");
console.log(id);

// Check Data Types
console.log(typeof firstName);   // string
console.log(typeof num1);        // number
console.log(typeof isStudent);   // boolean
console.log(typeof x);           // undefined
console.log(typeof y);           // object (JS ka famous bug)
console.log(typeof bigint);      // bigint
console.log(typeof id);          // symbol