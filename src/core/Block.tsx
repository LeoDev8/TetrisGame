import {iViewer, Point} from './types';

export default class Block {
  constructor(
    private _position: Point,
    private _color: string,
    private _viewer?: iViewer,
  ) {}

  public get position() {
    return this._position;
  }

  public get color() {
    return this._color;
  }

  public set position(newPosition) {
    this._position = newPosition;
    this._viewer?.show();
  }
}
