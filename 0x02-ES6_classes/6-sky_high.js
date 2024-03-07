/**
 * import class Building
 * implement child class that extends from building
 * give it 2 params in constructor
 * each attribute must have _param
 * implement getter
 * override evacuation Warning Message method
 * return a string
 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter method

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
