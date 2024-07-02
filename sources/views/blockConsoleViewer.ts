import Block from '../modules/block';
import {ViewerInterface} from '../modules/types';

export default class BlockConsoleViwer implements ViewerInterface {
  constructor(private _block: Block) {}

  show(): void {
    console.log(this._block.point, this._block.color);
  }

  remove(): void {}
}
