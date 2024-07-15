import React from 'react';
import {View, StyleSheet} from 'react-native';

const BlockComponent = ({block}) => {
  if (!block) {
    return <View style={styles.emptyBlock} />;
  }
  return <View style={[styles.block, {backgroundColor: block.color}]} />;
};

const styles = StyleSheet.create({
  emptyBlock: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  block: {
    width: 20,
    height: 20,
  },
});

export default BlockComponent;
