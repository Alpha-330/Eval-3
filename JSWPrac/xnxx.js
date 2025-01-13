const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 5, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
// function countCalculation(school){
//   return{
//   "Math Teacher" : school.departments.math.teachers,
//   "Math Students":school.departments.math.students,
//   "History Teacher" : school.departments.history.teachers,
//   "History Students" : school.departments.history.students
//   }
  
// }


// console.log( findTopStudent(school, 'math'))
// function findTopStudent(school,subject){
//   max = 0
//   for(let i =0;i<school.students.length;i++){
//     if (max < school.students[i].scores.math){
//       max = school.students[i].scores.math
//     }
   
//   }
//   return max
// }
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }

// Ans Problem 12
// let b = {"art": { teachers: 2, students: 50 }}
// console.log(addNewDept(school,b))


// function addNewDept(school,b){
//  let  a = {...school.departments,...b}
//  return a
// }

// Ans Problem 13

// console.log(highestStudentCountDepartment(school));//math

// function highestStudentCountDepartment(school){
//   // for(i=0;i<school.departments.length;i++){
//   //   return i
//   // }

//   // for(i=0;i<school.departments.length;i++){
//   //   return Object.keys(school.departments)[i]
//   // }
//   let a = Object.keys(school.departments) 
//   max = 0
//   for(let i =0;i<a.length;i++){
//     if(Object.values(school.departments)[i].students > max){
//       max = Object.values(school.departments)[i].students
//       b =Object.keys(school.departments)[i]
//     }
//   }
//   return b
  
  
// }
  
// function highestStudentCountDepartment(school){
//   max = 0
//   for(let i =0;i< Object.keys(school.departments).length;i++){
//     if(Object.values(school.departments)[i].students > max){
//       max = Object.values(school.departments)[i].students
//     }
//   }
//   return max
// }                                                              

console.log(generateGreeting("Alice")); // Output:  mmmouse chodh"Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish","gandu")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"


function generateGreeting(...args){
  if(args.length == 1){
    args = args.concat("Hello")
  }
  if(args[1] == "Spanish"){
    args[1] = "¡Hola";
  }
  if(args[1] == "French"){
    args[1] = "Bonjour";
  }
  return `"${args[1]} ${args[0]}!"`
}

             