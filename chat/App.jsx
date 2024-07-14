import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Game from './Game';

const App = () => {
  const [game, setGame] = useState(new Game());

  useEffect(() => {
    const gameLoop = setInterval(() => {
      game.update(); // Example: Game loop to handle game logic
      setGame(new Game(game)); // Force update
    }, 1000);

    return () => clearInterval(gameLoop);
  }, []);

  const handleMoveDown = () => {
    game.moveDown();
    setGame(new Game(game));
  };

  const handleRotate = () => {
    game.rotate();
    setGame(new Game(game));
  };

  return (
    <View style={styles.container}>
      <Text>Score: {game.score}</Text>
      <View style={styles.board}>
        {/* Render game board grid and blocks dynamically */}
        {/* {game.board.grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <View
                key={`${rowIndex}-${colIndex}`}
                style={[styles.cell, {backgroundColor: cell.color}]}
              />
            ))}
          </View>
        ))} */}
      </View>
      <TouchableOpacity onPress={handleMoveDown} style={styles.button}>
        <Text>Move Down</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRotate} style={styles.button}>
        <Text>Rotate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c40',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default App;
