// function greet(func,n){
//   for(let i =0;i<n;i++){
 
//     func(hi)
//   }
 
// }

// function func(hi){
//   console.log("Akash Weds GF.2")
//   hi()
// }

// function hi(){
//   console.log("HI")
// }

// greet(func,4)

let arr = [1,2,3]
let array = arr.map(function(num){
  return num*2 ;
})

// console.log(array)

let beer = [1,2,3,4,5]

let whiskey = beer.filter(function(num){
  return (num % 2)  == 0
})

// console.log(whiskey)

let red = [1,2,3,4,5]

let blue = red.reduce((first,second)=>  {return first + second})

console.log(blue)