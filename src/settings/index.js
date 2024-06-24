/**
 * Export some settings for the game
 * Export some beautiful colors for this app
 */
import {Dimensions} from 'react-native';

// Single Block settings
export const SINGLE_BLOCK_OUTSIDE_LENGTH = 16;
export const SINGLE_BLOCK_INSIDE_LENGTH = 8;
export const SINGLE_BLOCK_OUT_INNER_DISTANCE = 2;
export const SINGLE_BLOCK_OUTSIDE_THICKNESS = 2;
export const TWO_BLOCK_MARGIN = 2;

// Stage settings
export const STAGE_FRAME_THICKNESS = 1; // stage frame border thickness
const GAME_STAGE_LENGTH_OFFSET = 2 * STAGE_FRAME_THICKNESS; // offset number for the stage border
export const STAGE_ROW = 22;
export const STAGE_COLUMN = 10;
export const GAME_STAGE_WIDTH =
  SINGLE_BLOCK_OUTSIDE_LENGTH * STAGE_COLUMN +
  (STAGE_COLUMN - 1) * TWO_BLOCK_MARGIN +
  GAME_STAGE_LENGTH_OFFSET;
export const GAME_STAGE_HEIGHT =
  SINGLE_BLOCK_OUTSIDE_LENGTH * STAGE_ROW +
  (STAGE_ROW - 1) * TWO_BLOCK_MARGIN +
  GAME_STAGE_LENGTH_OFFSET;

// Sizes in this iPhone
const ScreenWidth = Dimensions.get('screen').width;
const ScreenHeight = Dimensions.get('screen').height;

export const yellowFrameDimentions = {
  yelowFrameWidth: GAME_STAGE_WIDTH + 110,
  yellowFrameHeight: GAME_STAGE_HEIGHT + 20,
};

// Colors
const getRandomNumber = (start, end) => {
  return Math.round(start + Math.random() * (end - start));
};
const backgroundColors = ['#fce', '#cc0', '#cce', '#efcdcc'];
export const backgroundColor =
  backgroundColors[getRandomNumber(0, backgroundColors.length - 1)];

export const tetrisColors = {
  black: '#000',
  green: '#83FF79',
  blue: '#64F6FF',
  yellow: '#FFE664',
};

// Langusge Setings
export const curLang = 'en';
