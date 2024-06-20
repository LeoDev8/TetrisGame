import React from 'react';
import {backgroundColors as Colors} from './Maps/Settings';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BottomArea from './components/BottomArea';
import TopArea from './components/TopArea';

export default function App(): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.gray,
      height: '100%',
    },
    safeContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    topDisplay: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <TopArea></TopArea>
        <BottomArea></BottomArea>
      </SafeAreaView>
    </View>
  );
}
