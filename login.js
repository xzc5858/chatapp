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
            <View><TextInput style={Styles.input}></TextInput></View>
            <View><TextInput style={Styles.input}></TextInput></View>
            <View><Text>登记</Text></View>
            <View><Text style={Styles.txt}>忘记密码?</Text></View>
            <View><Text style={Styles.txt}>---社交账号直接登记---</Text></View>
            <View></View>
            <View style={Styles.newUser}><Text>注册新用户</Text><Text>｜</Text><Text>国外手机注册</Text></View>
        </View>);
    }
}
var Styles = StyleSheet.create({

container:{
    alignItems: 'center',
},
    logo:{
        width:50,
        height:50,
        paddingTop:100

    },
newUser:{
    flexDirection: 'row',
    justifyContent:'center'
},
 input:{
   color:'#ffffff',
 },
    txt:{
     color:'#000000'
    }
});