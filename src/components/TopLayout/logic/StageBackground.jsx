import {_singleBlockView} from './gameBlocks';
import {STAGE_COLUMN, STAGE_ROW} from '../../../settings';

// const stageMap = Array(STAGE_ROW).fill(Array(STAGE_COLUMN).fill(0));
/**
 * Define The Stage Map Array
 */
const stageMap = Array.from({length: STAGE_ROW}, () =>
  Array(STAGE_COLUMN).fill(0),
);

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

export default function Stage() {
  // Render the background stage
  renderStageBackground(stageMap);

  return stageBacgroundViews;
}
