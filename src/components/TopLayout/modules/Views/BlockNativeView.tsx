import React from 'react';
import {View, StyleSheet} from 'react-native';
import Block from '../Block';
import {ViewControler} from '../Types';
import {
  SINGLE_BLOCK_INSIDE_LENGTH,
  SINGLE_BLOCK_OUTSIDE_LENGTH,
  SINGLE_BLOCK_OUTSIDE_THICKNESS,
  SINGLE_BLOCK_OUT_INNER_DISTANCE,
  TWO_BLOCK_MARGIN,
} from '../../../../settings';

export default class BlockNativeViewer
  extends React.Component
  implements ViewControler
{
  constructor(
    private _block: Block,
    private _isShowed: boolean = false,
    private _props?: any,
  ) {
    super(_props);
  }
  private _styles = StyleSheet.create({
    constainer: {
      width: SINGLE_BLOCK_OUTSIDE_LENGTH,
      height: SINGLE_BLOCK_OUTSIDE_LENGTH,
      position: 'absolute',
      left:
        this._block.point.x * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
      top:
        this._block.point.y * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
      borderWidth: SINGLE_BLOCK_OUTSIDE_THICKNESS,
      padding: SINGLE_BLOCK_OUT_INNER_DISTANCE,
      borderColor: this._block.color,
    },
    innerBlock: {
      width: SINGLE_BLOCK_INSIDE_LENGTH,
      height: SINGLE_BLOCK_INSIDE_LENGTH,
      backgroundColor: this._block.color,
    },
  });

  public get isShowed() {
    return this._isShowed;
  }

  public show(): React.JSX.Element {
    return (
      <View style={this._styles.constainer}>
        <View style={this._styles.innerBlock}></View>
      </View>
    );
  }

  public remove(): React.JSX.Element {
    return <View></View>;
  }
}
