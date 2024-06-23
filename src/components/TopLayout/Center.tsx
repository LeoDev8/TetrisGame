import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {frameDimentions, blockDimentions} from '../../gameSettings';
import SpecialBlock, {StageRow} from '../gameBlocks';

export default function Center(): React.JSX.Element {
  const gameStageMap = Array(22).fill(Array(10).fill(0));
  const L1Example = new SpecialBlock(2, '#f40');
  const [currentBlock, setCurrentBlock] = useState(L1Example.render());
  useEffect(() => {
    L1Example.fallDown(() => {
      setCurrentBlock(L1Example.render());
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tetris Game</Text>
      <View style={styles.yellowFrame}>
        <View style={styles.gameStageFrame}>
          {/* Gamge Stage View Part(need to be changed) */}
          {/* {gameStageMap.map((row, index) => {
            const rowView = new StageRow(
              row.length,
              index *
                (blockDimentions.outsideLength +
                  blockDimentions.eachBlockDistance),
            ).render();
            return <View key={index}>{rowView}</View>;
          })} */}
          <View>{currentBlock}</View>
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
    // padding: 30,
  },
  headerText: {
    position: 'absolute',
    top: -20,
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
  },
  yellowFrame: {
    width: frameDimentions.yelowFrameWidth,
    height: frameDimentions.yellowFrameHeight,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFF00',
    transform: [{translateY: 25}],
    // shadowColor: 'black',
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 1,
    // shadowRadius: 4,
  },
  gameStageFrame: {
    position: 'absolute',
    left: 6,
    top: 10,
    width: frameDimentions.gameStageWidth + 2.5,
    height: frameDimentions.gameStageHeight + 2.5,
    borderWidth: 1,
  },
  scores: {},
});
