import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Tetris</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
