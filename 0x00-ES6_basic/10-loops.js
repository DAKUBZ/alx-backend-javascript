export default function appendToEachArrayValue(array, appendString) {
  const arry = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    arry[idx] = appendString + value;
  }

  return arry;
}
