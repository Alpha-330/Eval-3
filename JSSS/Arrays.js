// Arrays  
const students = ['Piyush','John','Jane','Bolly']

students[0] = "Piyush Hardasani"
students[3] = "John Snow"
console.log(students)
console.log(students.length)

const myArray = [1,true,"Gandu","❤️","Piyush"]

students.push("Alexa")
students.push("Siri")
console.log(students)
console.log(students.length)

// Homogeneous in other languages

// Javascript Hetrogeneous

myArray.push(
  {name : "Piyush",
    height : 5.11
  }
)
console.log(myArray.indexOf("Piyush"))

myArray.pop();
console.log(myArray.reverse())