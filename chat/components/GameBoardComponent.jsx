import React from 'react';
import {View, StyleSheet} from 'react-native';
import BlockComponent from './BlockComponent';

const GameBoardComponent = ({board}) => {
  return (
    <View style={styles.board}>
      {board &&
        board.grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((block, colIndex) => (
              <BlockComponent key={colIndex} block={block} />
            ))}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: 200,
    height: 400,
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: '#333',
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoardComponent;
