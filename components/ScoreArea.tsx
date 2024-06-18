import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ScoreArea(): React.JSX.Element {
  return (
    <View style={styles.scoreAreaContainer}>
      <Text>Score Area</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  scoreAreaContainer: {
    width: '30%',
    height: 500,
    backgroundColor: '#bbb',
    padding: 10,
    marginBottom: 10,
  },
});
