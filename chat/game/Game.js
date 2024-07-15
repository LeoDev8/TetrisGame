// import GameBoard from './GameBoard';

// export default class Game {
//   constructor(width, height) {
//     this.board = new GameBoard(width, height);
//     this.currentBlockGroup = this.createBlockGroup();
//     this.nextBlockGroup = this.createBlockGroup();
//     this.score = 0;
//     this.intervalId = null;
//   }

//   createBlockGroup() {
//     // Create a new BlockGroup with a random shape and color
//   }

//   startGame() {
//     this.intervalId = setInterval(() => this.update(), 1000);
//   }

//   pauseGame() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   }

//   endGame() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//     // Additional end game logic
//   }

//   update() {
//     // Update the game state
//     if (!this.board.isCollision(this.currentBlockGroup)) {
//       this.currentBlockGroup.moveDown();
//     } else {
//       this.board.lockBlockGroup(this.currentBlockGroup);
//       this.score += this.board.clearLines();
//       this.currentBlockGroup = this.nextBlockGroup;
//       this.nextBlockGroup = this.createBlockGroup();
//       if (this.board.isCollision(this.currentBlockGroup)) {
//         this.endGame();
//       }
//     }
//   }

//   handleInput(input) {
//     // Handle user input
//     switch (input) {
//       case 'left':
//         this.currentBlockGroup.moveLeft();
//         break;
//       case 'right':
//         this.currentBlockGroup.moveRight();
//         break;
//       case 'down':
//         this.currentBlockGroup.moveDown();
//         break;
//       case 'rotate':
//         this.currentBlockGroup.rotate();
//         break;
//     }
//   }
// }

import {shapes, colors} from './shapes';
import BlockGroup from './BlockGroup';
import GameBoard from './GameBoard';

export default class Game {
  constructor(width, height) {
    this.board = new GameBoard(width, height);
    this.currentBlockGroup = this.createBlockGroup();
    this.nextBlockGroup = this.createBlockGroup();
    this.score = 0;
    this.intervalId = null;
  }

  createBlockGroup() {
    const keys = Object.keys(shapes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const shape = shapes[randomKey];
    const color = colors[randomKey];

    return new BlockGroup(shape, color);
  }

  startGame() {
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  pauseGame() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  endGame() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    // Additional end game logic
  }

  update() {
    // Update the game state
    if (!this.board.isCollision(this.currentBlockGroup)) {
      this.currentBlockGroup.moveDown();
    } else {
      this.board.lockBlockGroup(this.currentBlockGroup);
      this.score += this.board.clearLines();
      this.currentBlockGroup = this.nextBlockGroup;
      this.nextBlockGroup = this.createBlockGroup();
      if (this.board.isCollision(this.currentBlockGroup)) {
        this.endGame();
      }
    }
  }

  handleInput(input) {
    // Handle user input
    switch (input) {
      case 'left':
        this.currentBlockGroup.moveLeft();
        break;
      case 'right':
        this.currentBlockGroup.moveRight();
        break;
      case 'down':
        this.currentBlockGroup.moveDown();
        break;
      case 'rotate':
        this.currentBlockGroup.rotate();
        break;
    }
  }
}
