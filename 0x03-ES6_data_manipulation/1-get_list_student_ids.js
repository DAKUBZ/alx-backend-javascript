/**
 * getListStudentIds:  returns an array of ids from a list of object
 * @arr: array of objects
 * Return: if arr is not array return empty array
 * else: retun array of ids
 */
export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  const ids = arg.map((student) => student.id);
  return ids;
}
