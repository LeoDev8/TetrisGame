import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SpecialBlock from '../../logic/gameBlocks';
import {SINGLE_BLOCK_OUTSIDE_LENGTH, TWO_BLOCK_MARGIN} from '../../settings';

export default function Right(): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      width: '15%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shapeStyle: {
      position: 'absolute',
      right: 20 + SINGLE_BLOCK_OUTSIDE_LENGTH * 2 + TWO_BLOCK_MARGIN,
    },
  });

  return (
    <View style={styles.container}>
      {Array(6)
        .fill(1)
        .map((item, index) => {
          const abc = new SpecialBlock(index, '#999').render();
          return (
            <View
              key={index}
              style={{...styles.shapeStyle, top: 60 * index + 90}}>
              {abc}
            </View>
          );
        })}
    </View>
  );
}
