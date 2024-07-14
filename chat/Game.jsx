// Game.js

import Block from './Block';
import TetrisBoard from './TetrisBoard';

class Game {
  constructor() {
    this.board = new TetrisBoard();
    this.currentBlock = null;
    this.nextBlock = null;
    this.score = 0;
    this.level = 1;
    this.isPaused = false;
    this.isGameOver = false;
  }

  start() {
    this.board.clear(); // Clear the board
    this.score = 0;
    this.level = 1;
    this.isPaused = false;
    this.isGameOver = false;
    this.spawnNextBlock();
  }

  spawnNextBlock() {
    this.currentBlock = this.nextBlock || Block.getRandomBlock(); // Get random block
    this.nextBlock = Block.getRandomBlock(); // Prepare next block
    // Position the block at the top center of the board
    this.currentBlock.position.x = Math.floor(this.board.width / 2);
    this.currentBlock.position.y = 0;
    if (this.board.isCollision(this.currentBlock)) {
      this.gameOver();
    }
  }

  moveLeft() {
    if (!this.isPaused && !this.isGameOver) {
      this.currentBlock.moveLeft();
      if (this.board.isCollision(this.currentBlock)) {
        this.currentBlock.moveRight(); // Undo the move if collision
      }
    }
  }

  moveRight() {
    if (!this.isPaused && !this.isGameOver) {
      this.currentBlock.moveRight();
      if (this.board.isCollision(this.currentBlock)) {
        this.currentBlock.moveLeft(); // Undo the move if collision
      }
    }
  }

  moveDown() {
    if (!this.isPaused && !this.isGameOver) {
      this.currentBlock.moveDown();
      if (this.board.isCollision(this.currentBlock)) {
        this.currentBlock.moveUp(); // Undo the move if collision
        this.lockBlock();
      }
    }
  }

  rotate() {
    if (!this.isPaused && !this.isGameOver) {
      this.currentBlock.rotate();
      if (this.board.isCollision(this.currentBlock)) {
        this.currentBlock.rotateBack(); // Undo the rotation if collision
      }
    }
  }

  lockBlock() {
    this.board.placeBlock(this.currentBlock);
    this.clearLines();
    this.spawnNextBlock();
  }

  clearLines() {
    const linesCleared = this.board.clearLines();
    this.score += linesCleared * 100;
    if (linesCleared > 0 && this.score >= this.level * 1000) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level++;
    // Adjust game speed or add other level-up logic
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  gameOver() {
    this.isGameOver = true;
    // Handle game over logic (e.g., display game over screen)
  }
}

export default Game;
