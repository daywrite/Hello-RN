
'use strict';
import React, {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component,
} from 'react-native';

import Login from './Account/login'

class Hello extends Component {
    render() {
        return (
            <Login />
        );
    }
}

AppRegistry.registerComponent('Hello', () => Hello);

