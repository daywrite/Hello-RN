'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    PropTypes,
    StyleSheet
} from 'react-native';

export default class MenuButton extends React.Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // ͼƬ,����.isRequired��Ϊ������
        showText: PropTypes.string,  // ��ʾ����\����
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // �ص�����
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // ��Ҫ�ڻص�������ʹ��this,����ʹ��bind(this)����
    }

    _onClick() {
        if (this.props.onClick) {   // �������˻ص������������
            this.props.onClick(this.props.showText, this.props.tag);  // �ص�Title��Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});