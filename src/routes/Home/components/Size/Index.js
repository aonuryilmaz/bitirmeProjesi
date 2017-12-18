import React, { Component } from 'react';
import { Platform } from "react-native";
import { Input, View, Item, Form, Button, Text, Label, Picker, Right } from "native-base";
import Styles from './SizeStyles';

export class Size extends Component{
    constructor(props){
        super(props);
        this.state={Boy:'',Kilo:'',Gogus:'',Bel:'',Kalca:'',Cinsiyet:undefined}
    }
    handleInput(key,val){
        if (key === 'Boy') {
            this.setState({Boy:val});
        }
        if (key === 'Kilo') {
            this.setState({Kilo:val});
        }
        if (key === 'Gogus') {
            this.setState({Gogus:val});
        }
        if (key === 'Bel') {
            this.setState({Bel:val});
        }
        if (key === 'Kalca') {
            this.setState({Kalca:val});
        }
    }
    onValueChange2(value:string){
        this.setState({
            Cinsiyet: value
          });
    }
    render(){
        return(
            <View>
            <Form style={Styles.container}>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Boy:</Label>
                    <Input keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Boy')} placeholder="140cm-198cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Kilo:</Label>
                    <Input keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Kilo')} placeholder="43kg-120kg"  />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Göğüs:</Label>
                    <Input keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Gogus')} placeholder="65cm-120cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Bel:</Label>
                    <Input keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Bel')} placeholder="55cm-120cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Kalça:</Label>
                    <Input keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Kalca')} placeholder="85cm-115cm" />
                </Item>
                <Item inlineLabel>
                    <Label style={Styles.labels}>Cinsiyet:</Label>
                    <Right>
                        <Form>
                            <Picker
                                mode="dropdown"
                                placeholder="Cinsiyet"
                                selectedValue={this.state.Cinsiyet}
                                onValueChange={this.onValueChange2.bind(this)}
                                style={{ width: Platform.OS === "ios" ? undefined : 120 }}
                            >
                                <Picker.Item label="Erkek" value="key0" />
                                <Picker.Item label="Kadın" value="key1" />
                            </Picker>
                        </Form>
                    </Right>
                </Item>
                <View style={{marginTop:5}}>
                <Button onPress={() => {
                    var Cinsiyet="Erkek";
                    if(this.state.Cinsiyet==='key1'){
                        Cinsiyet="Kadın";
                    }
                    this.props.setSize({ Boy: this.state.Boy, Kilo: this.state.Kilo, Gogus: this.state.Gogus, Bel: this.state.Bel, Kalca: this.state.Kalca,Cinsiyet:Cinsiyet })
                    this.props.calculateSize();
                    this.props.navigation.navigate('Program');
                }} block success>
                    <Text>Kaydet - Bedenimi Bul</Text>
                </Button>
                </View>
            </Form>
        </View>
        )
    }
}

