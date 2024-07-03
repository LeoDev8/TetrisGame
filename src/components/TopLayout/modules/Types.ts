import React from 'react';

export interface Point {
  readonly x: number;
  readonly y: number;
}

/**
 * @interface ViewControler
 * @param {React.JSX.Element} show Function for showing the view
 * @param {React.JSX.Element} remove Function for removing th view
 */
export interface ViewControler {
  show(): React.JSX.Element;
  remove(): React.JSX.Element;
}
