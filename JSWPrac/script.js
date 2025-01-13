// //Example Invocation:
// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

// console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

// function employeeInformation(employees){
  
//   const secondEmployee = employees[1]
//   return{
//     secondEmployeeName : secondEmployee.name,
//     secondEmployeeDepartment : secondEmployee.department
//   }
// }

//Example Invocation:

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees)); // Output: 60000

function averageSalary(employees){
  for(let i = 0;i < 3;i++){
    a = a + employees[i].salary
  }
  return a/3
}