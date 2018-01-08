import React, { Component } from 'react';
import { Platform,AsyncStorage } from "react-native";
import { Input, View, Item, Form, Button, Text, Label, Picker, Right } from "native-base";
import { Bars } from 'react-native-loader';

import Styles from './SizeStyles';
import styles from '../../../SideBar/components/styles';

export class Size extends Component{
    constructor(props){
        super(props);
        this.state={Boy:'',Kilo:'',Gogus:'',Bel:'',Kalca:'',Cinsiyet:undefined,isLoading:false}     
        
    }
    componentWillMount(){
        AsyncStorage.getItem('sizes').then((res)=>{
            if(res!==null)
            this.setState(JSON.parse(res));            
        });
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
    handleSubmit(){
        this.setState({isLoading:true});
        var Cinsiyet="Erkek";
        if(this.state.Cinsiyet==='key1'){
            Cinsiyet="Kadın";
        }
        const list=JSON.stringify(this.state);
        AsyncStorage.setItem('sizes',list);
        this.props.setSize({ Boy: this.state.Boy, Kilo: this.state.Kilo, Gogus: this.state.Gogus, Bel: this.state.Bel, Kalca: this.state.Kalca,Cinsiyet:Cinsiyet })
        this.props.calculateSize();
        setTimeout(()=>{
            this.setState({isLoading:false});
            this.props.navigation.navigate('Program');
        },3000)
        
    }
    onValueChange2(value:string){
        this.setState({
            Cinsiyet: value
          });
    }
    renderBubleButton(){        
        if (this.state.isLoading) {
            return <Bars size={10} color="#4A4A4A" />
          }
          return <Button style={{width:2000,justifyContent:'center'}} rounded success 
        onPress={this.handleSubmit.bind(this)} >
            <Text style={styles.buttonTextStyle}>Kaydet-Bedenimi Bul</Text>
        </Button>
    }
    render(){
        return(
            <View>
            <Form style={Styles.container}>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Boy:</Label>
                    <Input value={this.state.Boy} keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Boy')} placeholder="140cm-198cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Kilo:</Label>
                    <Input value={this.state.Kilo} keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Kilo')} placeholder="43kg-120kg"  />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Göğüs:</Label>
                    <Input value={this.state.Gogus} keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Gogus')} placeholder="65cm-120cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Bel:</Label>
                    <Input value={this.state.Bel} keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Bel')} placeholder="55cm-120cm" />
                </Item>
                <Item inlineLabel >
                    <Label style={Styles.labels}>Kalça:</Label>
                    <Input value={this.state.Kalca} keyboardType='numeric' onChangeText={this.handleInput.bind(this, 'Kalca')} placeholder="85cm-115cm" />
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
                <View style={{alignItems:'center',alignSelf:'center'}}>
                {this.renderBubleButton()}
                </View>
            </Form>
        </View>
        )
    }
}

