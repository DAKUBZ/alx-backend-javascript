/**
 * class name with a constructor wth two strings
 * each attribute is stored in _variable
 * each attribute has getter and settermethod
 * displayFullCurrency- method to display currency
 * return: name and sig (naame (code)
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter method for code
  get code() {
    return this._code;
  }

  // setter method for code
  set code(code) {
    this._code = code;
  }

  // getter method for name
  get name() {
    return this._name;
  }

  // setter method for name
  set name(name) {
    this._name = name;
  }

  // method that return attributes
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
