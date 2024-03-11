/**
 * updateStudentGradeByCity - return an array of students for a city with their new grades
 * accepts 3 args
 * @list list of students
 * @city location of student
 * @newGrades array of grade objects
 * if student has no grade, final grade is N/A
 * use filter and map combined
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchGrade ? matchGrade.grade : 'N/A',
      };
    });
}
