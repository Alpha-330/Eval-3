
// Input
const students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 20 }
];

// Condition function: Sort by age in descending order
function sortByAgeDescending(a, b) {
  return b.age - a.age;
}

function sortByAgeAsc(a,b) {
  return a.age-b.age ;
}

function sortByNameAsc(a,b) {
  return b.name.localeCompare(a.name);
}

// Output
const sortedStudents = sortStudentsByCondition(students, sortByAgeDescending);
console.log(sortedStudents);
// Output should be:
// [
//   { name: "Charlie", age: 23 },
//   { name: "Alice", age: 21 },
//   { name: "David", age: 20 },
//   { name: "Bob", age: 19 }
// ]

function sortStudentsByCondition(students, condt){
  let arr = [...students]
  arr.sort((a,b)=>condt(a,b))
  return arr;

}

sortStudentsByCondition(students,sortByAgeDescending);
console.log(sortStudentsByCondition(students,sortByAgeAsc));
console.log(sortStudentsByCondition(students,sortByNameAsc));
