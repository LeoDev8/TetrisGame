import React from 'react';
import {blockDimentions} from '../gameSettings';
import {View, StyleSheet} from 'react-native';
import {
  SINGLE_BLOCK_OUTSIDE_LENGTH,
  SINGLE_BLOCK_INSIDE_LENGTH,
  TWO_BLOCK_MARGIN,
  SINGLE_BLOCK_OUTSIDE_THICKNESS,
  SINGLE_BLOCK_OUT_INNER_DISTANCE,
} from '../gameSettings';

export class SingleBlock {
  // constructor(color, x_ord = -30, y_ord = -250) {
  constructor(color = '#000', x_ord = 0, y_ord = 0) {
    this.color = color;
    this.x_ord = x_ord;
    this.y_ord = y_ord;
    this._styles = StyleSheet.create({
      constainer: {
        width: SINGLE_BLOCK_OUTSIDE_LENGTH,
        height: SINGLE_BLOCK_OUTSIDE_LENGTH,
        position: 'absolute',
        left: this.x_ord,
        top: this.y_ord,
        borderWidth: SINGLE_BLOCK_OUTSIDE_THICKNESS,
        padding: SINGLE_BLOCK_OUT_INNER_DISTANCE,
        borderColor: this.color,
      },
      innerBlock: {
        width: SINGLE_BLOCK_INSIDE_LENGTH,
        height: SINGLE_BLOCK_INSIDE_LENGTH,
        backgroundColor: this.color,
      },
    });
  }
  render() {
    return (
      <View style={this._styles.constainer}>
        <View style={this._styles.innerBlock}></View>
      </View>
    );
  }
}

export class StageRow {
  constructor(columnNum = 1, y_ord = 0) {
    this.columnNum = columnNum;
    this.y_ord = y_ord;
  }

  render() {
    const rowViewList = [];
    for (let i = 0; i < this.columnNum; i++) {
      rowViewList.push(
        <View key={i}>
          {new SingleBlock(
            '#ccc',
            i * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
            this.y_ord,
          ).render()}
        </View>,
      );
    }
    return rowViewList;
  }
}

// Define The Map Ordinate for each type of blocks
const blockShapeMap = [
  //0 田type
  [
    [1, 1],
    [1, 1],
  ],
  //1 -> L type 1
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  //2 -> L type 2
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  //3 -> z type 1
  [
    [0, 1],
    [1, 1],
    [1, 0],
  ],
  //4 -> z type 2
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
  //5 -> T type
  [
    [1, 0],
    [1, 1],
    [1, 0],
  ],
  //6 -> 1 type
  [
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
  ],
];
const blockOrdMap = [
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ], //0 -> 田type
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ], //1 -> L type 1
  [
    [1, 0],
    [1, 1],
    [0, 2],
    [1, 2],
  ], //2 -> L type 2
  [
    [1, 0],
    [0, 1],
    [1, 1],
    [0, 2],
  ], //3 -> z type 1
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ], //4 -> z type 2
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [0, 2],
  ], //5 -> T type
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ], //6 -> 1 type
];

export default class SpecialBlock {
  constructor(type_index, color = '#000') {
    this.type_index = type_index;
    this.color = color;
    this.template = blockOrdMap[type_index];
  }

  fallDown(callback) {
    this.template = this.template.map(([x_ord, y_ord], index) => {
      return [x_ord, y_ord + 1];
    });
    callback();
  }

  stopFallDown() {}

  moveRight() {}

  render() {
    return (
      <View>
        {this.template.map(([x_ord, y_ord], index) => {
          return (
            <View key={index}>
              {new SingleBlock(
                this.color,
                x_ord * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
                y_ord * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
              ).render()}
            </View>
          );
        })}
      </View>
    );
  }
}
