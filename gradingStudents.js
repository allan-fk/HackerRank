const grades = [73, 67, 38, 33]

function gradingStudents(grades) {
  // Write your code here
  grades = grades.map(grade => {
    if (!(grade < 38) 
    && (Math.ceil(grade/5)*5 - grade) < 3) return Math.ceil(grade/5)*5
    else return grade
  })
  return grades
}

gradingStudents(grades)