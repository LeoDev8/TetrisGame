import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default function Right(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
      <Text>Top Right Area</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'purple',
    width: '15%',
  },
});
