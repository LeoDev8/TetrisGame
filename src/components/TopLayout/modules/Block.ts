import {Point, ViewControler} from './Types';

export default class Block {
  constructor(private _point: Point, private _color: string) {}

  private _view: ViewControler;

  public get point() {
    return this._point;
  }
  public get color() {
    return this._color;
  }
  public get view() {
    return this._view;
  }

  public set point(val: Point) {
    this._point = val;
    this._view?.show();
  }

  public set color(val) {
    this._color = val;
  }
  public set view(val: ViewControler) {
    this._view = val;
  }
}
