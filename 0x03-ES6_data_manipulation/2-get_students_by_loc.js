/**
 * getStudentsByLocation - eturns an array of objects who are located in a specific city.
 * arg: list of students
 * city: location of the student
 */
export default function getStudentsByLocation(arg, city) {
  return arg.filter((student) => student.location === city);
}
