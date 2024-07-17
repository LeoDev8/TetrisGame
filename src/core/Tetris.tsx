import {Point, Shape} from './types';

export default class Tetris {
  private _points: Point[] = [];
  constructor(private _shape: Shape, private _color: string) {
    const _startPoint = this._shape.startPoint;
    const _shapeArray = this._shape.shapeArray;
    for (let i = 0; i < _shapeArray.length; i++) {
      for (let j = 0; j < _shapeArray[i].length; j++) {
        if (_shapeArray[i][j]) {
          this._points.push({x: j + _startPoint.x, y: i + _startPoint.y});
        }
      }
    }
  }

  public moveRight(): void {
    this._points.forEach((point, index) => {
      this._points[index] = {x: point.x + 1, y: point.y};
    });
  }

  public moveLeft(): void {
    this._points.forEach((point, index) => {
      this._points[index] = {x: point.x - 1, y: point.y};
    });
  }

  public moveDown(): void {
    this._points.forEach((point, index) => {
      this._points[index] = {x: point.x, y: point.y + 1};
    });
  }

  public rotate(): void {}
  public reverseRotate(): void {}

  public get points() {
    return this._points;
  }

  public get color() {
    return this._color;
  }
}
