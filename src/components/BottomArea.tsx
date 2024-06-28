import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {curLang} from '../settings';

export default function BottomArea(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bottomContainer}>
      <View style={styles.DirectionBtnsContainer}>
        <View style={styles.DirectionBtnGroup}>
          <TouchableOpacity style={styles.DirectionBtn}>
            <Text>左移</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.DirectionBtn}>
            <Text>旋转</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DirectionBtnGroup}>
          <TouchableOpacity style={styles.DirectionBtn}>
            <Text>下降</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.DirectionBtn}>
            <Text>右移</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.someSettingBtns}>
        <View style={styles.controleBtnContainer}>
          <TouchableOpacity style={styles.controlBtns}>
            <Text>暂停</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtns}>
            <Text>音效</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.controlBtns, styles.restartBtn]}>
            <Text>重玩</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.toBottomBtn}>
          <Text>掉落</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    width: 430,
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DirectionBtnsContainer: {
    width: 150,
    height: 150,
    justifyContent: 'space-between',
    transform: [{rotateZ: '-45deg'}],
    marginRight: 40,
    // backgroundColor: '#f0f',
  },
  DirectionBtnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DirectionBtn: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
    transform: [{rotateZ: '45deg'}],
  },
  someSettingBtns: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  controleBtnContainer: {
    width: '100%',
    height: 20,
    marginBottom: 100,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },

  restartBtn: {
    backgroundColor: 'yellow',
    margin: 0,
  },

  controlBtns: {
    width: 40,
    height: 30,
    backgroundColor: 'yellow',
    marginRight: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  toBottomBtn: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
