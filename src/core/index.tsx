console.log(
  '<============================================= Start =============================================>',
);

import Block from './Block';
import Tetris from './Tetris';
import {shapes} from './globalSetting';

const block1 = new Block({x: 0, y: 0}, '#fff');
// console.log(block1.position, block1.color);

const tetris1 = new Tetris(shapes[0], 'red');
console.log(tetris1.points);

console.log(
  '<============================================== End ==============================================>',
);
