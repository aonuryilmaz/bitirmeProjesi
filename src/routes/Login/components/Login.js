import React, { Component } from 'react';
import { Container, Content, Button, Picker, Form, Header, Left, Body, Right, Icon, Title,View } from 'native-base';
import {Image} from 'react-native';
import HeaderComponent from '../../../components/HeaderComponent';
import LoginForm from './LoginForm';


const ICON=require('../../../util/icon/test2.png');

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        
                    </Left>
                    <Body>
                        <Title>FIT ME ?</Title>
                    </Body>
                </Header>
                <Content style={{backgroundColor:'white'}}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={ICON} />
                </View>
                <View style={styles.loginScreen}>
                <LoginForm navigation={this.props.navigation} />
                </View>                  
                </Content>
            </Container>
        );
    }
}

const styles={
    loginScreen:{
        marginTop:50
    },
    image:{
        height:100,
        width:100
    },
    imageContainer:{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center'
    }
}