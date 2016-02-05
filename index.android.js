
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    View,
    Navigator,
    Text,
    BackAndroid,
    StyleSheet
    } = React;

import Index from './home/IndexPage'
import Login from './Account/login'

var Hello=React.createClass({

    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    },
    renderScene(router, navigator){
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case "welcome":
                Component = Login;
                break;
            case "feed":
                Component = Index;
                break;
            default: //default view
                Component = Index;
        }

        return <Component navigator={navigator} />
    },
    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    },

    render() {
        return (
            <Navigator
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
});

AppRegistry.registerComponent('Hello', () => Hello);

