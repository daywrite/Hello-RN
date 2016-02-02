/**
 * Created by Administrator on 2016/2/2.
 */
'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import Header from './Header';

export default class MainScreen extends Component{
    render(){
        return(
        <View style={{flex: 1}}>
            <Header />
        </View>
        )
    }
}
