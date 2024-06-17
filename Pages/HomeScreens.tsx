import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen For Test</Text>
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
