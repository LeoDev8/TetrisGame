import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import GameBoardComponent from './components/GameBoardComponent';
import Game from './game/Game';

export default function App() {
  const [game, setGame] = useState(null);
  const [score, setScore] = useState(0);

  // useEffect(() => {
  //   const newGame = new Game(10, 20); // Initialize with board width and height
  //   setGame(newGame);
  //   // newGame.startGame();

  //   const interval = setInterval(() => {
  //     // newGame.update();
  //     // setScore(newGame.score); // Update score
  //   }, 1000); // Update game state every second

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);

  const handleInput = input => {
    game.handleInput(input);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <GameBoardComponent board={game?.board} />
      <View style={styles.controls}>
        <Button title="Left" onPress={() => handleInput('left')} />
        <Button title="Right" onPress={() => handleInput('right')} />
        <Button title="Down" onPress={() => handleInput('down')} />
        <Button title="Rotate" onPress={() => handleInput('rotate')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    marginBottom: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
