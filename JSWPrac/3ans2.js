
//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

console.log(totalSalaryByDepartment(employees, "Finance")); 

function totalSalaryByDepartment(employees,finance){
  let a = employees.filter(function (i){
    return i.department == finance
  })
  let total = 0
  for(let i = 0;i<a.length;i++){
    total = total + a[i].salary
  }
  return total
}
