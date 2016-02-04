'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var AwesomeButton = require('react-native-awesome-button')

var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Alert,
    ToastAndroid
    } = React;

var LOGO = require('../images/Login/logo.png');
var BG = require('../images/Login/bg.jpg');
var USERNAME = require('../images/Login/username.png');
var PASSWORD = require('../images/Login/password.png');

var Login1 = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: ''
        }
    },
    btnLogin: function () {
        if(this.state.username=='') {
            ToastAndroid.show('用户名不能为空', ToastAndroid.SHORT);
            return;
        }
        if(this.state.password=='') {
            ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
            return;
        }

        fetch('http://221.208.194.214:1280/api/values')
            .then((response) => response.text())
            .then((responseText) => {
                ToastAndroid.show(responseText, ToastAndroid.SHORT);
            })
            .catch((error) => {

            }).done();
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={BG}/>
                <View style={styles.header}>
                    <Image style={styles.mark} source={LOGO}/>
                </View>
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputUsername} source={USERNAME}/>
                        <TextInput
                            style={[styles.input, styles.whiteFont]}
                            placeholder="用户名/手机号/邮箱"
                            placeholderTextColor="#FFF"
                            onChangeText={(val) => this.setState({username:val})}
                            value={this.state.username}
                            />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputPassword} source={PASSWORD}/>
                        <TextInput
                            password={true}
                            style={[styles.input, styles.whiteFont]}
                            placeholder="密码"
                            placeholderTextColor="#FFF"
                            onChangeText={(val) => this.setState({password:val})}
                            value={this.state.password}
                            />
                    </View>
                    <View style={styles.forgotContainer}>
                        <Text style={styles.greyFont}>忘记密码？</Text>
                    </View>
                </View>
                <View>
                    <AwesomeButton backgroundStyle={styles.signin}
                                     labelStyle={styles.whiteFont}
                                     transitionDuration={200}
                                     states={{
                                       idle: {
                                         text: '登 录',
                                         onPress: this.btnLogin,
                                         backgroundColor: '#FF3366',
                                         spinner: true,
                                       },
                                       busy: {
                                         text: '登录中',
                                         backgroundColor: '#7D7D7D',
                                         spinner: true,
                                       },
                                       success: {
                                         text: '成功',
                                         backgroundColor: '#FF3366'
                                       }
                                     }}
                                     buttonState={this.state.buttonState}
                        />
                </View>
                <View style={styles.signup}>
                    <Text style={styles.greyFont}>还没有一个账户？<Text style={styles.whiteFont}>注 册</Text></Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        /*backgroundColor: 'transparent'*/
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        /*backgroundColor: 'transparent'*/
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        position: 'absolute',
        top: 27,
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
        position: 'absolute',
        top: 27,
        marginLeft: 15,
        width: 20,
        height: 20
    },
    inputContainer: {
        padding: 5,
        /*borderWidth: 1,*/
        /*borderBottomColor: '#CCC',*/
        /*borderColor: 'transparent'*/
    },
    input: {
        /*position: 'absolute',
         left: 61,
         top: 12,
         right: 0,
         height: 20,
         fontSize: 14*/
        paddingLeft: 50,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
})


module.exports = Login1;