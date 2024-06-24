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
        <View>
          <TouchableOpacity>
            <Text>暂停</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>音效</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>重玩</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  DirectionBtnsContainer: {
    width: 190,
    height: 190,
    justifyContent: 'space-between',
    transform: [{rotateZ: '-45deg'}],
    // backgroundColor: '#f0f',
  },
  DirectionBtnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DirectionBtn: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
    transform: [{rotateZ: '45deg'}],
  },
  someSettingBtns: {},
});
