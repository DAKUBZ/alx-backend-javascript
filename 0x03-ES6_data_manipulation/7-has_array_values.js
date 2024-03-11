/**
 * hasValuesFromArray return boolen
 * if all elems in the array exist within a set
 * @set: a set
 * @array: an array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
