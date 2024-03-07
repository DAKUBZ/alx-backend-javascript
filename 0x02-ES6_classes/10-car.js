/**
 * implement class Caer
 * constructor has 3 params of same data type
 * each attribute is stored in _attribute
 * add clone method that return:
 * new object of the class
 */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
