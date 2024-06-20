import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TopCenterView, TopRightView, TopLeftView} from './TopLayout';

export default function TopArea(): React.JSX.Element {
  return (
    <View style={styles.topContainer}>
      <TopLeftView></TopLeftView>
      <TopCenterView></TopCenterView>
      <TopRightView></TopRightView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '70%',
  },
});
