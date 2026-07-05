//  for of used for Arrays and strings
let array=[10,20,30];

for(let value of array){
console.log(value);
}

for(let value of array){
   console.log(value +"\n");
}


// for in used for objects 
let student={
name:"Ali",
age:20
};

for(let key in student){
console.log(key);
}
//  Break used for terminations 

for(let i=1;i<=10;i++){
if(i==5)
break;
console.log(i);
}
// continue to no stop  the Process

