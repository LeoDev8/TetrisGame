/**
 * Export some settings for the game
 * Export some beautiful colors for this app
 */
import {Dimensions} from 'react-native';

// Design Scatch Params
const OUTSIDE_LENGTH = 25;
const INNERSIDE_LENGTH = 11;
const OUT_INNER_DISTANCE = 3;
const OUTSIDE_THICKNESS = 4;
const SCREEN_WIDTH = 666;
const SCREEN_HEIGHT = 1300;
const COLUMN_SINGLE_BLOCK_NUMBER = 10;
const ROW_SINGLE_BLOCK_NUMBER = 22;
const EACH_BLOCK_DISTANCE = 2;
const GAME_STAGE_WIDTH =
  OUTSIDE_LENGTH * COLUMN_SINGLE_BLOCK_NUMBER +
  (COLUMN_SINGLE_BLOCK_NUMBER - 1) * EACH_BLOCK_DISTANCE;
const GAME_STAGE_HEIGHT =
  OUTSIDE_LENGTH * ROW_SINGLE_BLOCK_NUMBER +
  EACH_BLOCK_DISTANCE * (ROW_SINGLE_BLOCK_NUMBER - 1);
const YELLOW_FRAME_WIDTH = 400;
const YELLOW_FRAME_HEIGHT = 624;

// Sizes in this iPhone
const ScreenWidth = Dimensions.get('screen').width;
const ScreenHeight = Dimensions.get('screen').height;
const getRealDimension = param => (param / SCREEN_WIDTH) * ScreenWidth;
const getRealDimensionY = param => (param / SCREEN_HEIGHT) * ScreenHeight;
export const blockDimentions = {
  outsideLength: getRealDimension(OUTSIDE_LENGTH),
  innersideLength: getRealDimension(INNERSIDE_LENGTH),
  outInnerDistance: getRealDimension(OUT_INNER_DISTANCE),
  outsideThickness: getRealDimension(OUTSIDE_THICKNESS),
  eachBlockDistance: getRealDimension(EACH_BLOCK_DISTANCE),
};

export const frameDimentions = {
  yelowFrameWidth: getRealDimension(YELLOW_FRAME_WIDTH),
  yellowFrameHeight: getRealDimension(YELLOW_FRAME_HEIGHT),
  gameStageWidth: getRealDimension(GAME_STAGE_WIDTH),
  gameStageHeight: getRealDimension(GAME_STAGE_HEIGHT),
};

console.log(`Screen Width: ${ScreenWidth}`);
console.log(`Screen Height: ${ScreenHeight}`);

Object.keys(frameDimentions).map(item => {
  console.log(`${item}: ${frameDimentions[item]}`);
});

// Colors
export const backgroundColor = '#D2F7FF';

export const tetrisColors = {
  black: '#000',
  green: '#83FF79',
  blue: '#64F6FF',
  yellow: '#FFE664',
};
