import TestViewer from './components/TestViewer';
import Block from './modules/block';

const block1 = new Block({x: 0, y: 0}, 'red');
block1.point = {
  x: 2,
  y: 8,
};
