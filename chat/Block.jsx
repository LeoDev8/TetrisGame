// Block.js

class Block {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    this.position = {x: 0, y: 0};
  }

  moveLeft() {
    this.position.x -= 1;
  }

  moveRight() {
    this.position.x += 1;
  }

  moveDown() {
    this.position.y += 1;
  }

  moveUp() {
    this.position.y -= 1;
  }

  rotate() {
    // Rotate the block (assuming clockwise rotation for simplicity)
    const N = this.shape.length;
    const rotatedShape = new Array(N).fill(0).map(() => new Array(N).fill(0));
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        rotatedShape[row][col] = this.shape[N - 1 - col][row];
      }
    }
    this.shape = rotatedShape;
  }

  rotateBack() {
    // Rotate back (counterclockwise)
    const N = this.shape.length;
    const rotatedShape = new Array(N).fill(0).map(() => new Array(N).fill(0));
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        rotatedShape[row][col] = this.shape[col][N - 1 - row];
      }
    }
    this.shape = rotatedShape;
  }

  static getRandomBlock() {
    // Example: Return a random Tetris block shape
    const shapes = [
      [[1, 1, 1, 1]], // I shape
      [
        [1, 1],
        [1, 1],
      ], // O shape
      [
        [0, 1, 0],
        [1, 1, 1],
      ], // T shape
      [
        [1, 0, 0],
        [1, 1, 1],
      ], // L shape
      // Add more shapes as needed
    ];
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']; // Example colors

    const randomIndex = Math.floor(Math.random() * shapes.length);
    const randomShape = shapes[randomIndex];
    const randomColor = colors[randomIndex];

    return new Block(randomShape, randomColor);
  }
}

export default Block;
