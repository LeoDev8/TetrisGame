import {PointInterface, ViewerInterface} from './types';
export default class Block {
  private _viewer?: ViewerInterface;

  public get viewer() {
    return this._viewer;
  }

  public set viewer(newViewer) {
    this._viewer = newViewer;
  }

  public get point() {
    // You can do something when the outside try to access the point prop
    return this._point;
  }

  public set point(newPoint) {
    // You can do something when the outside try to change the point prop
    // And because of the readonly setting for {x, y} in the Point Interface, whenever users try to change the point value, it will definately pass through the codes below.
    this._point = newPoint;
    this._viewer?.show();
  }

  public get color() {
    // You can do something when the outside try to access the color prop
    return this._color;
  }

  public set color(newColor) {
    // You can do something when the outside try to change the color prop
    this._color = newColor;
    this._viewer?.show();
  }

  constructor(private _point: PointInterface, private _color: string) {}
}
