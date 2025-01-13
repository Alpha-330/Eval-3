function a(){
  return "JavaSCript FUnctiins"
  
}

console.log(a())

var b = function(a,f){  // ANONYMOUS FUNCTION / NAMELESS
  return a+f
}

console.log(b(2,8))

// PARAMETERS AND ARGUMENTS

// parameters => listed as a part of function definition

// arguments => Values passed to the function when invoked

// Callback Function

function doBrush(){
  console.log(`Do brush first fucker`)
}

function EatBrkfst(bfItem,time,fun){
  fun();
  // doBrush();
  console.log(`I will eat ${bfItem} at ${time}`);
}

EatBrkfst('Dosa',10,doBrush); // Callback function

// callback function that is an uninvoked function passed as an argument in another function

// Higher Order Functions 
// Sweets

var sweets = [
  "Rasgulla",
  "Rasmalai",
  "Rabdi",
  "Gulab jamun",
  "Kaju katlt",
  "Jalebi"
];
var box = [];

// for (var i = 0;i<sweets.length;i++){
//   console.log(sweets[i]);
// }

sweets.forEach(function (elem,i){
  box.push(elem)
});

console.log(box)