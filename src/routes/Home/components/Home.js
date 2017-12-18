import React, { Component } from 'react';
import { Container, Content, Button,Picker,Form } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import { Size } from "./Size/Index";

/*const firebaseConfig={
    apiKey: "AIzaSyAoTjALVLDpUGmNo_aLZpDT8UVXh6yEBvs",
    authDomain: "bitirme-react.firebaseapp.com",
    databaseURL: "https://bitirme-react.firebaseio.com",
    projectId: "bitirme-react",
    storageBucket: "bitirme-react.appspot.com",
    messagingSenderId: "826895420034"
}*/


export default class Home extends Component {
    constructor(props) {
        super(props)
        /*this.itemsRef=this.getRef().child('items');
        this.itemsAuth=firebaseapp.auth(); Login işlemleri ihtiyaç halinde */
    }
    /* getRef(){
         return firebaseapp.database().ref();
     }
     <Login dbAuth={this.itemsAuth} dbRef={this.itemsRef} userLogin={this.props.userLogin} />
     */
    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} />
                <Content style={{ backgroundColor: "white" }}>
                    <Size navigation={this.props.navigation} calculateSize={this.props.calculateSize} setSize={this.props.setSize} />                    
                </Content>
            </Container>
        );
    }
}