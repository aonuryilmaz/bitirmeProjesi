import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
const Styles=StyleSheet.create({
    image:{
        height:height*(1.65/7),
        flex:1,
        resizeMode : 'stretch'   
    },
    textImage:{
        height:height*(0.5/7),
        alignItems:'center',
        justifyContent:'center',     
        marginBottom:1,
        backgroundColor: '#485a96',
    },
    button:{
        flexDirection:'row'
    },
    spinner:{
        width:width,
        flex: 1,
    backgroundColor: '#8b898f',
    alignItems: 'center',
    justifyContent: 'center',
    height:height*(4/7),
    }

})

export default Styles;