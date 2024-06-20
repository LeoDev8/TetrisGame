import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default function Center(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
      <Text>Top Center Area</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    width: '70%',
  },
});
