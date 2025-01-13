// function sayHello(){
//   console.log('Hey Piyush')

// }


//          // Arguments
// function add(a,b,c){
//   return a+b+c
// }

// d = add(5,100,25) // Parameters
// console.log("Answer "+d)
// function mul(a,b){
//   return a*b
// }

// a = mul(5,10)

// console.log("Result is "+a)

// function sayHello(){
//   console.log('Hey Piyush')

// }


//          // Arguments
// function add(a,b,c){
//   return a+b+c
// }

// d = add(5,100,25) // Parameters
// console.log("Answer "+d)
// function mul(a,b){
//   return a*b
// }

// a = mul(5,10)

// console.log("Result is "+a)


// addNumbers(1,3,4,7)

// Unlimited Arguments

function addNumbers(){
  let ans  = 0
  for (i =0;i< arguments.length;i=i+1){
    
    ans = ans + arguments[i]
  }
  return ans
}

let s3x = addNumbers(10,20,30,40,50)
console.log(s3x)


function addNumbers2(...numbers){   // Spread Operators
  let ans  = 0  
  for (i =0;i< numbers.length;i=i+1){
    
    ans = ans + numbers[i]
  }
  return ans
}

s3x = addNumbers2(20,30,40,50)
console.log(s3x)