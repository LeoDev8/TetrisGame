import {PointInterface} from './types';
export default class Block {
  public get point() {
    // You can do something when the outside try to access the point prop
    return this._point;
  }

  public set point(newPoint) {
    // You can do something when the outside try to change the point prop
    // And because of the readonly setting for {x, y} in the Point Interface, whenever users try to change the point value, it will definately pass through the codes below.
    this._point = newPoint;
  }

  public get color() {
    // You can do something when the outside try to access the color prop
    return this._color;
  }

  public set color(newColor) {
    // You can do something when the outside try to change the color prop
    this._color = newColor;
  }

  constructor(private _point: PointInterface, private _color: string) {}
}
