import React, { Component } from "react";
import { Image,View } from "react-native";
import { Left, Body, Icon,Item } from 'native-base';
import Styles from './MainStyles';

const Main=({src})=>{
    return(
        <View>
            <Item>
                <Body>
                    <Image style={Styles.image} source={src}/>
                </Body>
            </Item>
        </View>
    )
}

export default Main;