import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Button, Input, Label,View } from 'native-base';
import Styles from './LoginStyles';

export const Login = ({userLogin}) => {
    let username="";
    let password="";
    function handleInput(key,val){
        if(key==='username'){
            username=val;
        }
        if(key==='password'){
            password=val;
        }
    }
    return (
        <View style={Styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>User Name</Label>
                    <Input onChangeText={handleInput.bind(this,'username')} />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input onChangeText={handleInput.bind(this,'password')} />
                </Item>
            </Form>
            <View style={Styles.loginButton}>
                <Button onPress={()=>{username&& userLogin(username)}} block primary>
                    <Text>Login</Text>
                </Button>
            </View>
        </View>
    )
}

export default Login;