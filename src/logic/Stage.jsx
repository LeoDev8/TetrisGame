import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SingleBlock, blockShapeMap} from './gameBlocks';
import {STAGE_COLUMN, STAGE_ROW} from '../settings';

// const stageMap = Array(STAGE_ROW).fill(Array(STAGE_COLUMN).fill(0));
const stageMap = Array.from({length: STAGE_ROW}, () =>
  Array(STAGE_COLUMN).fill(0),
);

const stageRenderMap = [];
const _singleBlockView = (color, row, column, ...params) => {
  return (
    <View key={params}>{new SingleBlock(color, row, column).render()}</View>
  );
};
const renderStageBackground = stageMap => {
  for (let row = 0; row < stageMap.length; row++) {
    for (let column = 0; column < stageMap[row].length; column++) {
      stageRenderMap.push(
        _singleBlockView(
          stageMap[row][column] === 0 ? '#ccc' : '#111',
          column,
          row,
          `${row}-${column}`,
        ),
      );
    }
  }
};
const addSingleBlock = (color, x, y) => {
  stageMap[y][x] = 1;
  stageRenderMap.push(_singleBlockView(color, x, y));
};

const addTetris = (shape, color, start_x = 4, start_y = 0) => {
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j] === 0) {
        continue;
      }
      addSingleBlock(color, start_x + j, start_y + i);
    }
  }
};

export default function Stage() {
  //   const [stageMap, setStageMap] = useState(_stageMap);

  //   useEffect(() => {
  //     console.log('Map Changed', stageMap);
  //   }, [stageMap]);

  // Render the background stage
  renderStageBackground(stageMap);

  addTetris(blockShapeMap[0], '#f40');
  addTetris(blockShapeMap[3], '#f0f', 4, 2);
  //   addTetris(blockShapeMap[2], '#cc0');
  addTetris(blockShapeMap[4], '#000', 0, 0);
  //   addTetris(blockShapeMap[5], '#456');
  //   addTetris(blockShapeMap[6], '#eee');
  //   addTetris(blockShapeMap[7], '#f0f');
  //   addTetris(blockShapeMap[1], '#0ff');

  return stageRenderMap;
}
