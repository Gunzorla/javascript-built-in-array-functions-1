const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
    let totalScore = students.reduce((sum, student) => {
        return sum + student.score
    }, 0)

    return totalScore / students.length
}

console.log(getAverageStudentScore(students)); // Output: 87.5
