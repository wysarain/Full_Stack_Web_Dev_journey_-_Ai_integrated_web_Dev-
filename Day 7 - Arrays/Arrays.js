 // Arrays are the most common data structure in JavaScript. They are used to store multiple values in a single variable. Arrays can hold values of any type, including numbers, strings, objects, and even other arrays.
 // same type data in Arrays 

// Arrays are the Data structure where data stored of same type .
                                          // Arrays 
let fruits = ["Apple", "Banana", "Mango", "Grapes"];

console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 4  

fruits.push("Orange");

fruits.push("Orange");

fruits.pop();

fruits.pop();

fruits.shift();

fruits.unshift("Kiwi");

fruits.unshift("Kiwi");

console.log(fruits.includes("Apple"));

console.log(fruits.indexOf("Mango"));

let arr=[1,2,3,4];

arr.splice(1,2);

arr.splice(1,0,100);

let arr=[1,2,3,4];

console.log(arr.slice(1,3));

console.log(arr.join("-"));

arr.reverse();

arr.sort();

let num5=[5,2,10];

num5.sort((a,b)=>a-b);

num5.sort((a,b)=>b-a);

let a=[1,2];

let b=[3,4];

console.log(a.concat(b));

let arr=[1,2];

let newArr=[...arr,3,4];

let arr=[10,20];

let [a,b]=arr;

arr.forEach(function(item){

console.log(item);

});

let num6=[1,2,3];

let ans=num6.map(num=>num*2);

console.log(ans);

let even=num6.filter(num=>num%2==0);

console.log(even);

let value=num6.find(num=>num>2);

let num8=[1,2,3,4];

let sum=num8.reduce((total,current)=>{

return total+current;

},0);

console.log(sum);

