import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
const Styles=StyleSheet.create({
    image:{
        height:height*(4/7),
        width:width
    }

})

export default Styles;