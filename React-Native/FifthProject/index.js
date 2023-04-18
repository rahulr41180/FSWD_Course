/**
 * @format
 */

// It is a entry point for java for android application
// Where we registered our component.

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
