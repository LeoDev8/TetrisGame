import {_singleBlockView} from './gameBlocks';
import {STAGE_COLUMN, STAGE_ROW} from '../../../settings';
import {View, Text} from 'react-native';

// const stageMap = Array(STAGE_ROW).fill(Array(STAGE_COLUMN).fill(0));
/**
 * Define The Stage Map Array
 */
export const stageMap = Array.from({length: STAGE_ROW}, () =>
  Array(STAGE_COLUMN).fill(0),
);

stageMap[21][6] = 1;

let stageBacgroundViews = [];

/**
 * Function for Rendering The Stage Background
 * @param {Array} stageMap
 */
const renderStageBackground = stageMap => {
  for (let row = 0; row < stageMap.length; row++) {
    for (let column = 0; column < stageMap[row].length; column++) {
      stageBacgroundViews.push(
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

// /**
//  * Tetris move funuction
//  * @param {String} direction The moving direction of the Tetris
//  */
// const moveTetris = direction => {
//   switch (direction) {
//     case 'down': {
//       console.log('down');
//       return 'down';
//     }
//     case 'right': {
//       console.log('right');
//       return 'right';
//     }
//     case 'left': {
//       console.log('left');
//       return 'left';
//     }
//   }
// };

export default function Stage() {
  // Render the background stage
  renderStageBackground(stageMap);
  // setTimeout(() => {
  //   stageBacgroundViews = [
  //     <View>
  //       <Text>ASdfsad</Text>
  //     </View>,
  //   ];
  // }, 1000);

  // addTetris(curstageOrd, '#f40');
  // // setTimeout(() => {
  // //   setCurstageOrd(blockShapeMap[2]);
  // // }, 1000);
  // moveTetris('down');
  // // addTetris(blockShapeMap[3], '#f0f', 4, 5);
  // // // addTetris(blockShapeMap[2], '#cc0');
  // // addTetris(blockShapeMap[4], '#000', 0, 0);
  // // addTetris(blockShapeMap[1], '#456', 4, 10);
  // // addTetris(blockShapeMap[4], '#066', 9, 12);
  // // addTetris(blockShapeMap[6], '#f0f', 8, 4);
  // // addTetris(blockShapeMap[1], '#0ff', 4, 14);

  return stageBacgroundViews;
}
