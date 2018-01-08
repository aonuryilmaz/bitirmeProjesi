import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import firebase from 'firebase';
import { TitledInput } from '../TitledInput';
import { Bars } from 'react-native-loader';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { 
                setTimeout(()=>{
                    this.setState({ error: '', loading: false });
                    this.props.navigation.navigate('Drawer') },2000)
                })            
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { setTimeout(()=>{
                        this.setState({ error: '', loading: false });
                        this.props.navigation.navigate('Drawer') },2000) })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Bars size={10} color="#4A4A4A" />
        }
        return <Button style={{width:150,justifyContent:'center'}} rounded info 
        onPress={this.onLoginPress.bind(this)} >
            <Text style={styles.buttonTextStyle}>Log in</Text>
        </Button>
    }
    render() {
        return (
            <View>
                <Form>
                    <Item inlineLabel>
                        <Label>Email Adresi:</Label>
                        <Input
                            onChangeText={email => this.setState({ email })}
                            placeholder='Email adresinizi giriniz.'
                            value={this.state.email}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>Şifre:</Label>
                        <Input
                            onChangeText={password => this.setState({ password })}
                            placeholder='Şifrenizi giriniz.'
                            secureTextEntry
                            value={this.state.password}
                            autoCorrect={false}
                        />
                    </Item>
                </Form>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <View style={styles.buttonStyle}>
                    {this.renderButtonOrSpinner()}
                </View>
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonTextStyle: {
        color: 'white',
        fontSize:15
    },
    buttonStyle: {
        alignItems:'center',
        alignSelf:'center'
    }
};


export default LoginForm;