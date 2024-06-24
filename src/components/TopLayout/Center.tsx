import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  yellowFrameDimentions,
  GAME_STAGE_WIDTH,
  GAME_STAGE_HEIGHT,
  STAGE_FRAME_THICKNESS,
  STAGE_ROW,
  STAGE_COLUMN,
} from '../../settings';
import Stage from '../../logic/Stage';

export default function Center(): React.JSX.Element {
  // const L1Example = new SpecialBlock(2, '#f40');
  // const [currentBlock, setCurrentBlock] = useState(L1Example.render());
  // useEffect(() => {
  //   // L1Example.fallDown(() => {
  //   //   setCurrentBlock(L1Example.render());
  //   // });
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>俄罗斯方块</Text> */}
      <Text style={styles.headerText}>Tetris Game</Text>
      <View style={styles.yellowFrame}>
        <View style={styles.gameStageFrame}>
          <Stage></Stage>
          {/* Current Block */}
          {/* <View>{currentBlock}</View> */}
        </View>
        <View style={styles.scores}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 2,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    position: 'absolute',
    top: -30,
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
  },
  yellowFrame: {
    width: yellowFrameDimentions.yelowFrameWidth,
    height: yellowFrameDimentions.yellowFrameHeight,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFF00',
    transform: [{translateY: yellowFrameDimentions.yellowFrameHeight / 20 - 8}],

    // shadowColor: 'black',
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 1,
    // shadowRadius: 4,
  },
  gameStageFrame: {
    position: 'absolute',
    left: 6,
    top: 10,
    width: GAME_STAGE_WIDTH,
    height: GAME_STAGE_HEIGHT,
    borderWidth: STAGE_FRAME_THICKNESS,
  },
  scores: {},
});
