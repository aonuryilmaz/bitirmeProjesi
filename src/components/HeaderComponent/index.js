import React, { Component } from 'react';
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
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Right>
      </Header>
    );
  }
}