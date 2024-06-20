import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default function Left(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Top Left Area</Text>
      <Text>Top Left Area</Text>
      <Text>Top Left Area</Text>
      <Text>Top Left Area</Text>
      <Text>Top Left Area</Text>
      <Text>Top Left Area</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '15%',
    // backgroundColor: 'red',
  },
});
