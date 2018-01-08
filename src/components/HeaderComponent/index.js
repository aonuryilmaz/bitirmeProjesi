import React, { Component } from 'react';
import {Text} from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button onPress={()=>{this.props.navigation.navigate('DrawerToggle')}} transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>FIT ME ?</Title>
        </Body>
        {
          this.props.back &&
          <Right>
            <Text style={{fontSize:18,color:'white'}} >Bedeniniz {this.props.back.toUpperCase()}</Text> 
        </Right>
        }
      
      </Header>
    );
  }
}