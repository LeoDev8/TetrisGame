/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
// import App from './chat/App';
import {name as appName} from './app.json';

import test from './src/core';

AppRegistry.registerComponent(appName, () => App);
