'use strict';
var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = React;
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

var IndexPage = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: ''
        }
    },
    btnLogin:function(){

        Actions.login;
    },
    render: function () {
        return (
            <View>
                <Text>123</Text>
<Button onPress={this.btnLogin}>123123</Button>
            </View>
        );
    }
});

module.exports = IndexPage;