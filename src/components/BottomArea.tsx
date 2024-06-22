import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function BottomArea(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bottomContainer}>
      <ScrollView>
        <Text>Bottom Area</Text>
        <Button
          title="Touch Me"
          onPress={() => {
            console.log('Click');
          }}></Button>
        <Button
          title="Touch Me"
          onPress={() => {
            console.log('Click');
          }}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    width: 430,
    height: "40%",
    backgroundColor: '#ffccdd',
  },
});
