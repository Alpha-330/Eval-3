
// Input
const expenses = [
  { name: "Food", amount: 50 },
  { name: "Transportation", amount: 30 },
  { name: "Internet", amount: 45 },
  { name: "Groceries", amount: 80 }
];

// Output
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses); // Output should be: 205

function calculateTotalExpenses(expenses){
  let sum = 0
  for(let i = 0;i<expenses.length;i++){
    sum = sum + expenses[i].amount
  }
  return sum
}
