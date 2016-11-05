'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Image,
    Text,
    TextInput,
    View
} from 'react-native';
const len = 50;
export default class login extends Component {
    render() {
        return (
            <View style={Styles.container}>
    <View><Image source={require('../images/logo.png')} style={Styles.logo}></Image></View>
       <TextInput underlineColorAndroid = "transparent" style={Styles.input1} placeholder="手机或邮箱" autoCorrect={true}></TextInput>
       <TextInput underlineColorAndroid = "transparent" style={Styles.input2} placeholder="密码" password={true}></TextInput>
        <View><Text>登陆</Text></View>
        <View><Text style={Styles.txt}>忘记密码?</Text></View>
            <View style={{height:50}}></View>
        <View><Text style={Styles.txt}>---社交账号直接登记---</Text></View>
        <View></View>
        <View style={Styles.newUser}><Text>注册新用户</Text><Text>｜</Text><Text>国外手机注册</Text></View>
        </View>);
    }
}
var Styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        flex:1,
        flexDirection: 'row',
    },
    logo:{
        width:50,
        height:50,
        marginTop:50,
    },

    input1:{
        height:30,
        borderColor:'#adadad',
        borderWidth:1,
        marginLeft: 10,
        marginRight:10,
    },
    input2:{
        height:30,
        borderBottomColor:'#adadad',
        borderLeftColor:'#adadad',
        borderRightColor:'#adadad',
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        marginLeft: 10,
        marginRight:10,
    },
    txt:{
        color:'#000000',
        fontSize:18,
        height:40,
    },
    newUser:{
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:50,
    },
});