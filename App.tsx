import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function App(): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#cd0',
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}
