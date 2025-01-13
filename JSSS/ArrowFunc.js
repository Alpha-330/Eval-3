//  Arrow Functions

// 1. Syntax
// function sayhello(){
//   console.log("Hello")
// }
// sayhello()

const sayhello = () => {
  console.log("Heyy !")
};

sayhello()


const add = (a,b) => {
  return a+b
};

console.log(add(2,3))

// Scond method  ONe liner Function

const mul = (e,f) => e*f;
console.log(mul(4,5))




// 2. 'arguments' keyword
const addNUmber = function addNUmber(...numbers){
  let ans = 0
  for(let i =0;i<numbers.length;i++){
    ans = ans +numbers[i]
  
  }
  return ans
}
console.log(addNUmber(2,3))

//  3 . HOisting  -- phele function decalre karna jaruri ha
const sayHey = () =>{
  console.log("Hey There !")
}
sayHey()

// 4. this keyword
const obj = {
  value : 20,
  myfunction : function ()  {
    console.log("Value is "+this.value)
  }
}

obj.myfunction();