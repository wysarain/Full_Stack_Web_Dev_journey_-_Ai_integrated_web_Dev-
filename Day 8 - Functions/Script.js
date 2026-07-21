// Functions are the piece of the code that perform a specific task. They are reusable and can be called multiple times in the code. Functions help in organizing the code and making it more readable and maintainable.

                                              // Function Declaration

function greet(){

console.log("Hello");

}

greet();



function greet(name){

console.log(name);

}

greet("MyName");



function add(a,b){

return a+b;

}

console.log(add(2,3));




const add=function(a,b){

return a+b;

}


const add=(a,b)=>{

return a+b;

}

const square=x=>x*x;





function greet(name="Guest"){

console.log(name);

}


// ==============================
// 1. Basic Function
// ==============================

function greet() {
    console.log("Hello");
}

greet();


// ==============================
// 2. Parameters
// ==============================

function greet(name) {
    console.log(name);
}

greet("MyName");


// ==============================
// 3. Return
// ==============================

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));


// ==============================
// 4. Function Expression
// ==============================

const add1 = function(a, b) {
    return a + b;
};

console.log(add1(5, 4));


// ==============================
// 5. Arrow Function
// ==============================

const add2 = (a, b) => {
    return a + b;
};

console.log(add2(10, 20));


// Short Arrow Function

const square = x => x * x;

console.log(square(5));


// ==============================
// 6. Default Parameter
// ==============================

function greetDefault(name = "Guest") {
    console.log(name);
}

greetDefault();
greetDefault("MyName");


// ==============================
// 7. Rest Operator
// ==============================

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);


// ==============================
// 8. Callback Function
// ==============================

function done() {
    console.log("Done");
}

function greetCallback(name, callback) {
    console.log(name);
    callback();
}

greetCallback("MyName", done);


// ==============================
// 9. Scope
// ==============================

// Global Scope
let a = 10;
console.log(a);

function test() {
    // Local Scope
    let b = 20;
    console.log(b);
}

test();


// ==============================
// 10. Hoisting
// ==============================

hello();

function hello() {
    console.log("Hi");
}


// ==============================
// 11. Closures
// ==============================

function outer() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();


// ==============================
// 12. Recursion
// ==============================

function countdown(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);