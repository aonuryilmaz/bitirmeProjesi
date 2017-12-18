import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Button, Input, Label,View } from 'native-base';
import Styles from './LoginStyles';

export const Login = ({userLogin,dbRef,dbAuth}) => {
    let keyx="";
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
                <Button onPress={()=>{username&& userLogin(username); 
                /*dbAuth.createUserWithEmailAndPassword(username,password).catch((error)=>{
                   var errorCode=error.code;
                })            */
                dbAuth.signInWithEmailAndPassword(username, password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                  });
                 dbAuth.onAuthStateChanged(function(user) {
                    if (user) {
                      // User is signed in.
                      var displayName = user.displayName;
                      var email = user.email;
                      var emailVerified = user.emailVerified;
                      var photoURL = user.photoURL;
                      var isAnonymous = user.isAnonymous;
                      var uid = user.uid;
                      var providerData = user.providerData;
                      console.log(user);
                      // ...
                    } else {
                      // User is signed out.
                      // ...
                    }
                  })     
                }} block primary>
                    <Text>Login</Text>
                </Button>
            </View>
        </View>
    )
}

export default Login;