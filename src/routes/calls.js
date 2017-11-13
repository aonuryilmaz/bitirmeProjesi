import React,{Component} from 'react';
import {Container,Content,Text} from 'native-base';
import HomeContainer from '../components/HeaderComponent';

export default class Calls extends Component{
    render(){
        return(
            <Container>
                <HomeContainer navigation={this.props.navigation}/>
                <Content>
                    <Text>Calls</Text>
                </Content>
            </Container>
        );
    }
}