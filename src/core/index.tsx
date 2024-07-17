console.log(
  '<============================================= Start =============================================>',
);

import Block from './Block';
import Tetris from './Tetris';
import {shapes} from './globalSetting';

const block1 = new Block({x: 0, y: 0}, '#fff');
// console.log(block1.position, block1.color);

const tetris1 = new Tetris(shapes[3], 'red');
tetris1.points.forEach(point => {
  console.log(point.x, point.y);
});
tetris1.moveDown();
tetris1.moveRight();
tetris1.points.forEach(point => {
  console.log(point.x, point.y);
});

console.log(
  '<============================================== End ==============================================>',
);
