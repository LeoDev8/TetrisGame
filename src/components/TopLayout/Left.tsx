import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SpecialBlock, {SingleBlock} from '../gameBlocks';

export default function Left(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* 如何排列以及父元素的坐标后续使用的时候在进行调试 */}
      {Array(7)
        .fill(1)
        .map((item, index) => {
          const abc = new SpecialBlock(index, '#000').render();
          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                left: 20,
                top: 60 * index,
              }}>
              {abc}
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
