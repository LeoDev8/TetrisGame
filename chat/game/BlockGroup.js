import Block from './Block';

export default class BlockGroup {
  constructor(shape, color) {
    this.x = 0; // starting position
    this.y = 0; // starting position
    this.color = color;
    this.blocks = this.createBlocks(shape);
    this.shape = shape;
  }

  createBlocks(shape) {
    let blocks = [];
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          blocks.push(new Block(col, row, this.color));
        }
      }
    }
    return blocks;
  }

  rotate() {
    // Rotate the shape and update the blocks accordingly
  }

  moveLeft() {
    this.x--;
  }

  moveRight() {
    this.x++;
  }

  moveDown() {
    this.y++;
  }

  getBlocks() {
    return this.blocks.map(block => ({
      x: block.x + this.x,
      y: block.y + this.y,
      color: block.color,
    }));
  }
}
