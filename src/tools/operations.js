import {stageMap} from '../components/TopLayout/logic/StageBackground';
import {STAGE_COLUMN, STAGE_ROW} from '../settings';

/**
 * Transform the shape map to ord map
 * @param {Array} shapeMap
 * @returns
 */
export const shapeToOrd = (shapeMap, startX = 0, startY = 0) => {
  const ord = [];
  for (let i = 0; i < shapeMap.length; i++) {
    for (let j = 0; j < shapeMap[i].length; j++) {
      if (shapeMap[i][j] === 0) {
        continue;
      }
      ord.push([j + startX, i + startY]);
    }
  }
  return ord;
};

/**
 * Make the Tetris Ord Down 1 point. (Only change the ord map, do not render! and no check!)
 * @param {Array} ordMap
 * @returns
 */
export const moveDown = ordMap => {
  for (let i = 0; i < ordMap.length; i++) {
    ordMap[i][1]++;
  }
  return ordMap;
};

/**
 * Make the Tetris Ord Right 1 point. (Only change the ord map, do not render! and no check!)
 * @param {Array} ordMap
 * @returns
 */
export const moveRight = ordMap => {
  for (let i = 0; i < ordMap.length; i++) {
    ordMap[i][0]++;
  }
  return ordMap;
};

/**
 * Make the Tetris Ord Left 1 point. (Only change the ord map, do not render! and no check!)
 * @param {Array} ordMap
 * @returns
 */
export const moveLeft = ordMap => {
  for (let i = 0; i < ordMap.length; i++) {
    ordMap[i][0]--;
  }
  return ordMap;
};

/**
 * Check whether the Tetris can move down, right and left
 * @param {Array} ordMap
 * @param {String} direction
 * @returns
 */
export const checkMove = (ordMap, direction) => {
  switch (direction) {
    case 'down': {
      const afterDownOrd = moveDown(ordMap);
      for (let i = 0; i < afterDownOrd.length; i++) {
        if (afterDownOrd[i][1] >= STAGE_ROW) {
          return false;
        }
        if (stageMap[afterDownOrd[i][1]][afterDownOrd[i][0]] === 1) {
          return false;
        }
      }
      return true;
    }
    case 'right': {
      const afterRightOrd = moveRight(ordMap);
      for (let i = 0; i < afterRightOrd.length; i++) {
        if (afterRightOrd[i][0] >= STAGE_COLUMN) {
          return false;
        }
        if (stageMap[afterRightOrd[i][1]][afterRightOrd[i][0]] === 1) {
          return false;
        }
      }
      return true;
    }
    case 'left': {
      const afterRightOrd = moveLeft(ordMap);
      for (let i = 0; i < afterRightOrd.length; i++) {
        if (afterRightOrd[i][0] <= 0) {
          return false;
        }
        if (stageMap[afterRightOrd[i][1]][afterRightOrd[i][0]] === 1) {
          return false;
        }
      }
      return true;
    }
  }
};

/**
 * Make the block down 1 point. (After checking)
 * @param {Array} ordMap
 * @returns
 */
export const moveDownBlock = ordMap => {
  if (checkMove(ordMap, 'down')) {
    return moveDown(ordMap);
  }
  return ordMap;
};

/**
 * Make the block right 1 point. (After checking)
 * @param {Array} ordMap
 * @returns
 */
export const moveRightBlock = ordMap => {
  if (checkMove(ordMap, 'right')) {
    return moveRight(ordMap);
  }
  return ordMap;
};

/**
 * Make the block left 1 point. (After checking)
 * @param {Array} ordMap
 * @returns
 */
export const moveLeftBlock = ordMap => {
  if (checkMove(ordMap, 'left')) {
    return moveLeft(ordMap);
  }
  return ordMap;
};
