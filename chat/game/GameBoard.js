import Block from './Block';

class GameBoard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
  }

  createGrid() {
    return Array.from({length: this.height}, () =>
      Array(this.width).fill(null),
    );
  }

  addBlockGroup(blockGroup) {
    blockGroup.getBlocks().forEach(block => {
      // Ensure block coordinates are within bounds
      if (
        block.y >= 0 &&
        block.y < this.height &&
        block.x >= 0 &&
        block.x < this.width
      ) {
        this.grid[block.y][block.x] = block;
      }
    });
  }

  clearLines() {
    let linesCleared = 0;
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.grid[y].every(cell => cell !== null)) {
        this.grid.splice(y, 1);
        this.grid.unshift(Array(this.width).fill(null));
        linesCleared++;
        y++;
      }
    }
    return linesCleared;
  }

  isCollision(blockGroup) {
    return blockGroup.getBlocks().some(block => {
      return (
        block.x < 0 ||
        block.x >= this.width ||
        block.y >= this.height ||
        (block.y >= 0 && this.grid[block.y][block.x] !== null)
      );
    });
  }

  lockBlockGroup(blockGroup) {
    blockGroup.getBlocks().forEach(block => {
      if (
        block.y >= 0 &&
        block.y < this.height &&
        block.x >= 0 &&
        block.x < this.width
      ) {
        this.grid[block.y][block.x] = block;
      }
    });
  }

  reset() {
    this.grid = this.createGrid();
  }
}

export default GameBoard;
