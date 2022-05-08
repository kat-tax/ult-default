import 'react-native-url-polyfill/auto';
import {AppRegistry} from 'react-native';
import App from 'interface';
import config from 'config';

AppRegistry.registerComponent(config.NAME, () => App);
