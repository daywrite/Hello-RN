'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;

var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');

import Login from '../Account/login'
import IndexPage from '../home/IndexPage'

var IndexModule = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: ''
        }
    },

    render: function () {
        return (
            <Router hideNavBar={true} name="root">
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>


                <Route name="indexPage" component={IndexPage} title="IndexPage" />

                <Route name="login" schema="modal" component={Login} initial={true}  ></Route>
            </Router>
        );
    }
});

module.exports = IndexModule;/**
 * Created by Administrator on 2016/2/5.
 */
