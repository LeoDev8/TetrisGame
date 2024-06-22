import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SingleBlock} from '../gameBlocks';

export default function Right(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {Array(1)
        .fill(1)
        .map((item, index) => {
          const abc = new SingleBlock('red').render();
          return <View key={index}>{abc}</View>;
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
