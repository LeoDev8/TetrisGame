import Block from './Block';
import {Point} from './Types';

export default class BlockGroup {
  constructor(private _shape: Point[], private _color: string) {}

  private _generateBlocks(shape: Point[]): Block[] {
    let _blocks: Block[] = [];
    for (let i = 0; i < shape.length; i++) {
      _blocks.push(new Block(shape[i], this._color));
    }
    return _blocks;
  }

  public get shape() {
    return this._shape;
  }

  public get color() {
    return this._color;
  }

  public get blocks() {
    return this._generateBlocks(this._shape);
  }

  /**
   * Just Move Right, Do not do anything other.
   * @returns {Point[]} Return an array of Point type
   */
  public moveRight(): Point[] {
    let newPoints: Point[] = [];
    for (let i = 0; i < this._shape.length; i++) {
      newPoints.push({
        x: this._shape[i].x + 1,
        y: this._shape[i].y,
      });
    }
    this._shape = newPoints;
    return newPoints;
  }
}
