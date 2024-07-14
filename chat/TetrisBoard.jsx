// TetrisBoard.js

class TetrisBoard {
  constructor(width = 10, height = 20) {
    this.width = width;
    this.height = height;
    this.grid = this.createEmptyBoard();
  }

  createEmptyBoard() {
    // Create an empty board grid
    const grid = [];
    for (let row = 0; row < this.height; row++) {
      grid[row] = [];
      for (let col = 0; col < this.width; col++) {
        grid[row][col] = {isEmpty: true, color: '#FFFFFF'}; // Default color or empty cell
      }
    }
    return grid;
  }

  clear() {
    // Clear the entire board
    this.grid = this.createEmptyBoard();
  }

  isCollision(block) {
    // Check if a block collides with the board boundaries or other blocks
    for (let row = 0; row < block.shape.length; row++) {
      for (let col = 0; col < block.shape[row].length; col++) {
        if (block.shape[row][col] !== 0) {
          const boardX = block.position.x + col;
          const boardY = block.position.y + row;
          if (
            boardX < 0 ||
            boardX >= this.width ||
            boardY < 0 ||
            boardY >= this.height ||
            !this.grid[boardY][boardX].isEmpty
          ) {
            return true; // Collision detected
          }
        }
      }
    }
    return false; // No collision
  }

  placeBlock(block) {
    // Place a block on the board grid
    for (let row = 0; row < block.shape.length; row++) {
      for (let col = 0; col < block.shape[row].length; col++) {
        if (block.shape[row][col] !== 0) {
          const boardX = block.position.x + col;
          const boardY = block.position.y + row;
          if (boardY >= 0) {
            this.grid[boardY][boardX] = {isEmpty: false, color: block.color};
          }
        }
      }
    }
  }

  clearLines() {
    // Clear completed lines and return the number of lines cleared
    let linesCleared = 0;
    for (let row = this.height - 1; row >= 0; row--) {
      if (this.isLineComplete(row)) {
        this.clearLine(row);
        linesCleared++;
        // Move all rows above down by one row
        for (let r = row - 1; r >= 0; r--) {
          for (let col = 0; col < this.width; col++) {
            this.grid[r + 1][col] = this.grid[r][col];
          }
        }
        // Set top row as empty after moving down
        for (let col = 0; col < this.width; col++) {
          this.grid[0][col] = {isEmpty: true, color: '#FFFFFF'};
        }
        // Recheck current row after moving down
        row++;
      }
    }
    return linesCleared;
  }

  isLineComplete(row) {
    // Check if a line is complete (all cells filled)
    for (let col = 0; col < this.width; col++) {
      if (this.grid[row][col].isEmpty) {
        return false;
      }
    }
    return true;
  }

  clearLine(row) {
    // Clear a complete line
    for (let col = 0; col < this.width; col++) {
      this.grid[row][col] = {isEmpty: true, color: '#FFFFFF'};
    }
  }
}

export default TetrisBoard;
