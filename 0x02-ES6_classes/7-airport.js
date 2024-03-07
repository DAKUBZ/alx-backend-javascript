/** Implement class Airport
 * constructor with 2 strings
 * attribute stored in _param
 * default string should return airport code
 */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
