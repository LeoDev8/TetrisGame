import React from 'react';
import {backgroundColors as Colors} from './Maps/Colors';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BtnArea from './components/BtnArea';
import MainArea from './components/MainArea';
import ScoreArea from './components/ScoreArea';

export default function App(): React.JSX.Element {
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.topDisplay}>
    //     <MainArea></MainArea>
    //     <ScoreArea></ScoreArea>
    //   </View>
    //   <BtnArea></BtnArea>
    // </SafeAreaView>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        height: '100%',
      }}>
      <View style={styles.topDisplay}>
        <MainArea></MainArea>
        <ScoreArea></ScoreArea>
      </View>
      <BtnArea></BtnArea>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
