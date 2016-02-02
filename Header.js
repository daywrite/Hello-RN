/**
 * Created by Administrator on 2016/2/2.
 */
'use strict'

import React, {
    Component,
    View,
    StyleSheet
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,  // 处理iOS状态栏
        height: 48,   // 处理iOS状态栏
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    }
});

