/**
 * Export some global settings
 */

import {Point, Shape} from './types';

export const startPoint: Point = {x: 4, y: 0};

export const shapes: Shape[] = [
  // J Type
  {
    startPoint,
    shapeArray: [
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  // L Type
  {
    startPoint,
    shapeArray: [
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  // + type
  {
    startPoint,
    shapeArray: [
      [1, 1],
      [1, 1],
    ],
  },
  // T Type
  {
    startPoint,
    shapeArray: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  },
  // z Type
  {
    startPoint,
    shapeArray: [
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
  // z2 Type
  {
    startPoint,
    shapeArray: [
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  // 1 Type
  {
    startPoint,
    shapeArray: [[1, 1, 1, 1]],
  },
];

export const STAGE_ROW = 22;
export const STAGE_COLUMN = 10;
