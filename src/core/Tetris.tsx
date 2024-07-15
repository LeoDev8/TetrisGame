import {Point, Shape} from './types';

export default class Tetris {
  private _points: Point[] = [];
  constructor(private _shape: Shape, private _color: string) {}

  public get points() {
    const _startPoint = this._shape.startPoint;
    const _shapeArray = this._shape.shapeArray;
    for (let i = 0; i < _shapeArray.length; i++) {
      for (let j = 0; j < _shapeArray[i].length; j++) {
        if (_shapeArray[i][j]) {
          this._points.push({x: j + _startPoint.x, y: i + _startPoint.y});
        }
      }
    }
    return this._points;
  }

  public get color() {
    return this._color;
  }
}
