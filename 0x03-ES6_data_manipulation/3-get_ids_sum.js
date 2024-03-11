/**
 * getStudentIdsSum -  returns the sum of all the student ids
 * accept list of student from prev fun
 */
export default function getStudentIdsSum(arg) {
  return arg.reduce((accumulator, student) => accumulator + student.id, 0);
}
