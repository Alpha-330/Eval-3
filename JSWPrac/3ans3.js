
//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

employeeSummary(employees);
// Output: [
//   "Employee John Doe works in HR department and earns $50000 annually.",
//   "Employee Jane Smith works in Finance department and earns $60000 annually.",
//   "Employee Alex Johnson works in IT department and earns $70000 annually.",
//   "Employee Maria Lopez works in Finance department and earns $65000 annually."
// ]
function employeeSummary(employees){
  for(let i = 0; i< employees.length;i++){
    console.log(`Employee ${employees[i].name} works in ${employees[i].department} and earns ${employees[i].salary} annualy\n`);
    
  }
}