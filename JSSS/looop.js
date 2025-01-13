/* //  Loops
console.log("PP")
for (let i =1;i<=10;i = i+2){
  console.log("PIYUSH hardasani",i)
}



//  You             
                                // House


//  while



let you = 0

let house = 50


while(you != house){
  you = you + 1
  console.log("Step Taken " + you)
  
}


// Do While Loop
let i = 0
do{

  i= i + 1
  console.log("Step Taken " + i)
}while(i > 10)
 */

let number = 20;
let guess = 0;

do {
  guess = parseInt(prompt("Guess a number"))
  if(guess == number){
    alert('Winner')
    break;
    
  }
}while(guess !=0)