import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function MainArea(): React.JSX.Element {
  return (
    <View style={styles.mainAreaContainer}>
      <Text>Main Area</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainAreaContainer: {
    width: "70%",
    height: 500,
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
