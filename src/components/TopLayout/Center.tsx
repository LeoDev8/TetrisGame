import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  yellowFrameDimentions,
  SINGLE_BLOCK_OUTSIDE_LENGTH,
  TWO_BLOCK_MARGIN,
  GAME_STAGE_WIDTH,
  GAME_STAGE_HEIGHT,
  STAGE_COLUMN,
  STAGE_ROW,
  STAGE_FRAME_THICKNESS,
} from '../../settings';
import SpecialBlock, {StageRow, SingleBlock} from '../gameBlocks';

export default function Center(): React.JSX.Element {
  const gameStageMap = Array(STAGE_ROW).fill(Array(STAGE_COLUMN).fill(0));
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
          {/* Gamge Stage View Part(need to be changed) */}
          {gameStageMap.map((row, index) => {
            const rowView = new StageRow(
              row.length,
              index * (SINGLE_BLOCK_OUTSIDE_LENGTH + TWO_BLOCK_MARGIN),
            ).render();
            return <View key={index}>{rowView}</View>;
          })}

          {/* Current Block */}
          {/* <View>{currentBlock}</View> */}
        </View>
        <View style={styles.scores}></View>
      </View>
    </View>
  );
}

let language = 'Chinese';

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
