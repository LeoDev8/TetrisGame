import React from 'react';
import {View, Text} from 'react-native';
import {STAGE_COLUMN, STAGE_ROW} from '../../../settings';

const stageLockTemplate = Array.from({length: STAGE_ROW}, () =>
  Array(STAGE_COLUMN).fill(0),
);
const stageLockView = [];

export default function StageLock() {
  //   console.log('STAGE_LOCK_TEMPLATE:', stageLockTemplate);
  return <View>{/* <Text>Stage Lock</Text> */}</View>;
}
