import Block from './modules/block';
import BlockConsoleViewer from './views/blockConsoleViewer';

const block1 = new Block({x: 0, y: 0}, 'red');
block1.point = {
  x: 2,
  y: 8,
};

const block_console_viewer = new BlockConsoleViewer(block1);
block1.viewer = block_console_viewer;
block_console_viewer.show();

block1.point = {
  x: 9,
  y: 9,
};
