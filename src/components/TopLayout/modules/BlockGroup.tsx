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
}
