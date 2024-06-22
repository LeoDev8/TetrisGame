import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SpecialBlock, {SingleBlock} from '../gameBlocks';

export default function Left(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {Array(7)
        .fill(1)
        .map((item, index) => {
          const abc = new SpecialBlock(index, '#f4f').render();
          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                left: 10,
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
