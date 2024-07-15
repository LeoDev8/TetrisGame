import React from 'react';

export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface iViewer {
  render(): React.JSX.Element;
  show(): void;
  remove(): void;
}

/**
 * Shape Type Defination
 * @argument {Point} startPoint: On behalf of the start xy of a tetris
 * @argument {Array<Array<number>>} shapeArray: On behalf of the shape of an tetris like [[1, 1], [1, 1]]
 */
export interface Shape {
  startPoint: Point;
  readonly shapeArray: Array<Array<number>>;
}
