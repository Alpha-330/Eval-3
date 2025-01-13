// function calculateFinalGrades(students) {
//   let passedStudents = []; // Create an empty array to store the students who pass

//   for (let i = 0; i < students.length; i++) { // Loop through each student
//       let student = students[i];
//       let sumOfScores = 0;

//       // Calculate the sum of scores
//       for (let j = 0; j < student.scores.length; j++) {
//           sumOfScores += student.scores[j];
//       }

//       // Calculate the average score and round it
//       let finalGrade = Math.round(sumOfScores / student.scores.length);

//       // Check if the student passed (average score of 70 or higher)
//       if (finalGrade >= 70) {
//           // Add the student's info to the passedStudents array
//           passedStudents.push({
//               id: student.id,
//               name: student.name,
//               finalGrade: finalGrade
//           });
//       }
//   }
//   return passedStudents; // Return the list of students who passed
// }

// // Input
const students = [
{ id: 1, name: "Alice", scores: [85, 90, 92] },
{ id: 2, name: "Bob", scores: [70, 68, 72] },
{ id: 3, name: "Charlie", scores: [60, 65, 58] },
{ id: 4, name: "David", scores: [75, 80, 78] },
];


function calculateFinalGrades(students){
  let Pass = []
  for(let i = 0;i<students.length;i++){
    student = students[i]
    marks = students[i].scores

    let avg = 0
    for(let j = 0;j<marks.length;j++){
      avg += marks[j]
    }
    avg = Math.round(avg/3)
    if (avg >= 70){
      Pass.push({
        id : student.id,
        name : student.name,
        finalgrade : avg,

      })
    }
  }
  return Pass

}


const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);