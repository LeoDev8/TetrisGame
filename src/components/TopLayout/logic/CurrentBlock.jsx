import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {blockShapeMap} from './gameBlocks';
import {_singleBlockView} from './gameBlocks';
import {md5} from 'js-md5';

const _getRandomNum = (start, end) => {
  return Math.round(start + Math.random() * (end - start));
};

// const renderCurrentBlock = (curBlockShape, startX, startY) => {
//   console.log(curBlockShape);
//   for (let i = 0; i < curBlockShape.length; i++) {
//     for (let j = 0; j < curBlockShape.length; j++) {
//       if (curBlockShape[i][j] === 0) {
//         continue;
//       }
//       curBlockView.push(
//         _singleBlockView('red', startX + j, startY + i, `${startX}-${startY}`),
//       );
//     }
//   }
//   console.log(curBlockView);
// };

const arr = Array(10)
  .fill(0)
  .map((item, index) => <Text key={index}>{index}</Text>);

export default function CurrentBlock() {
  let blockIndexInit = _getRandomNum(0, 6);
  let id = 'id' + Math.random().toString(16).slice(2);
  const [curBlockId, setCurBlockId] = useState(id);
  const [curBlockColor, setCurBlockColor] = useState('red');
  const [curBlockView, setCurBlockView] = useState([]);

  //   console.log(id, md5(id));

  useEffect(() => {
    if (curBlockId === '') {
      setCurBlockView([]);
      addTetris(blockShapeMap[_getRandomNum(0, 6)], curBlockColor);
    }
    console.log('curBlockId Changed', curBlockId);
  }, [curBlockId]);

  const addTetris = (shape, color, start_x = 4, start_y = 0) => {
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j] === 0) {
          continue;
        }
        curBlockView.push(
          _singleBlockView(
            color,
            start_x + j,
            start_y + i,
            `${curBlockId}-${start_x + j}-${start_y + i}`,
          ),
        );
      }
    }
  };

  const removeTetris = () => {
    setCurBlockId('');
  };

  //   addTetris(blockShapeMap[_getRandomNum(0, 6)], curBlockColor);
  console.log(curBlockView);

  setTimeout(() => {
    removeTetris();
  }, 1000);

  return <View>{curBlockView}</View>;
}
