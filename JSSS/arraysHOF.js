// Arrays  
const students = ['Piyush','John','Jane','Bolly']

// function print(n){
//   console.log(n)
// }

// students.forEach(print)

// students.forEach((val)=>console.log(val))


// students.map((val)=> console.log(val))

// numbers = [1,2,3,4,5,6]
// let newArr =[]
// numbers.forEach(num => newArr.push(num*2))
// console.log(newArr)

numbers = [1,2,3,4,5,6]

// function double(n){
//   return n*2
// }

// let newArr = numbers.map(double) // ForEach nhi kar skta return

// console.log(newArr)



let ans = numbers.findIndex(num => num === 1)
let ans2 = numbers.find(num => num === 1)

console.log(ans)
console.log(numbers.includes(31))


const newArr= numbers.filter((num) => num%2== 0);
console.log(newArr)
console.log(newArr)

let g = numbers.splice(1,5)
console.log(numbers)