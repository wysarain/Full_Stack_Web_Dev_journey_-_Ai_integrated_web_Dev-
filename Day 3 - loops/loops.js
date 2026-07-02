 console.log("Hello, World!");
 console.log("Hello, World!");
 console.log("Hello, World!");
 console.log("Hello, World!");

//  to avoid this repetitive code, we can use a loop

for (let i = 1 ; i <=5 ; i++){
    console.log("Hello, World!");
}
// Types of loop  for loop  while loop  do while loop

 for (let i = 1 ; i<=6 ; i++){
   console.log(i);
 }

// Even numbers odd numbers   Done 
  // now infinite loop    for(;;){}  this is infinite loop
 
// nested loop  

for(let i=1; i<=5 ; i++){
  for(let j = 1 ; j<=4 ; j++){
    if(i ==1 || j ==1 || j==4 || i ==5){ 
        console.log("*");
  }
   console.log("\n");
}
}
// While loop
let i = 1;
 while (i<=5){
    console.log(i);
    i++;  
 }

//  Do While loop

let m = 2;
do{
  console.log(" i am while loop")
  m++ ;
} while(m<=5);


