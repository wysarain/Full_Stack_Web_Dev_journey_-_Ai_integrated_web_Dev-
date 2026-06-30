// Arithmetic operators

 let x = 3;
 let  y = 4;
 
 console.log("x + y =" +  (x+y));
 console.log("x / y =" + (x/y));
 console.log("x - y =" + (x-y));
 console.log("x * y =" + (x*y));
 console.log("x % y =" + (x%y));

// Assignment operators
 let a = 10 
 console.log("a = " + a );
  a += 5; // a = a + 5
  console.log("a += 5 => " + a);
  a -= 3; // a = a - 3
  console.log("a -= 3 => " + a);
  a *= 2; // a = a * 2
  console.log("a *= 2 => " + a);
  a /= 4; // a = a / 4
  console.log("a /= 4 => " + a);
  a %= 3; 
  console.log("a %= 3 => " + a);

// Comparison operators
 let p = 5;
 let q = 10;

console.log(p==q);
console.log(p!=q);
console.log(p>q);
console.log(p<q);
console.log(p>=q);
console.log(p<=q);

// logical operators

  let marks = 85 ;
  if (marks >=85 && marks<=95)  {
     console.log("Grade is A");
  }
  else if (marks >=70 && marks<85) {
      console.log("Grade is B");
  }
 else if (marks < 70 && marks >= 50){
      console.log("Grade is C");
 } else {
     console.log("Grade is D");
 }

//  Conditional (ternary) operators
 
let num = 2;

if (num ==0){
  console.log("Number is zero");
} else if (num > 0 ) {
  console.log("Number is Positive ");

} else {
  console.log("Number is Negative");
}

let a1 , b1 , c1 ;
a1 = 5;
b1 = 10;
c1 = 42;

if (a1 > b1 && a1 > c1 ){
  console.log("a1 is the largest number");
}
else if (b1 > a1 && b1 > c1) {
  console.log("b1 is the largest number");
} 
else {  console.log("c1 is the largest number");
} 

// is leap year 

let year = 2006;

if ( year %400 == 0){
  console.log(year + " is a leap year");
}
else if ( year %100 == 0 ){
  console.log(year + " is not a leap year");
}
else if ( year  % 4 == 0 ){
  console.log(year + " is a leap year");
}
else {
  console.log(year + " is not a leap year");
}


// switch statements 

let day = 3;

switch (day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}