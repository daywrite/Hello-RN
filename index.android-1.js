/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
} from 'react-native';

import MainScreen from './MainScreen';

class Hello extends Component {
    render() {
        return (<MainScreen />);
    }
}

AppRegistry.registerComponent('Hello', () => Hello);

