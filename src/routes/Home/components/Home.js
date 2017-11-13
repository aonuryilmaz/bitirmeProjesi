import React, { Component } from 'react';
import { Container,View, Content, Text, Form, Item, Button, Input, Label } from 'native-base';
import HomeContainer from '../../../components/HeaderComponent';
import Login from './Login/Index';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <HomeContainer navigation={this.props.navigation} />
                <Content>
                    <Login userLogin={this.props.userLogin}/>
                </Content>
            </Container>
        );
    }
}