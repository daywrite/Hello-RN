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
        flexDirection: 'row',   // ˮƽ�Ų�
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,  // ����iOS״̬��
        height: 48,   // ����iOS״̬��
        backgroundColor: '#d74047',
        alignItems: 'center'  // ʹԪ�ش�ֱ�����Ų�, ��flexDirectionΪcolumnʱ, Ϊˮƽ����
    }
});

