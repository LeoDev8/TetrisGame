import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SpecialBlock from '../gameBlocks';

export default function Right(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {Array(6)
        .fill(1)
        .map((item, index) => {
          const abc = new SpecialBlock(index, '#999').render();
          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                left: 20,
                top: (60 * index) + 90,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
