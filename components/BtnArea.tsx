import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function BtnArea(): React.JSX.Element {
  return (
    <View style={styles.buttonAreaContainer}>
      <Text>Button Area</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonAreaContainer: {
    width: '100%',
    backgroundColor: '#aaa',
    padding: 10,
  },
});
