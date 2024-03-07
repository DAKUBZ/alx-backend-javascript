/**
 * implent class Holberton
 * constructor hold a number and a string
 * store attribute in _param
 * when cast, number return size
 * and string return location
 */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
