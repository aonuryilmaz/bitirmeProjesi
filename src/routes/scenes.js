import React from 'react';
import HomeContainer from './Home/containers/HomeContainer';
import ProgramContainer from './Program/containers/ProgramContainer';
import LoginContainer from './Login/containers/LoginContainer';
import SideBar from './SideBar/components/SideBar';
import LoginScreen from './Login/components/Login'

import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator } from 'react-navigation';


export const Home=StackNavigator({
    Home:{
        screen:HomeContainer
    }
},{
    headerMode:'none'
});

export const Login=StackNavigator({
    Login:{
        screen:LoginContainer
    }
},{
    headerMode:'none'
});

export const Program=StackNavigator({
    Program:{
        screen:ProgramContainer
    }
},{
    headerMode:'none'
})
const Drawer=DrawerNavigator({
    AnaSayfa:{screen:Home},
    Program:{screen:Program}
},{
    initialRouteName:'AnaSayfa',
    contentOptions: {
        activeTintColor: "#e91e63"
    },
    contentComponent: props => <DrawerItems {...props} />
})


export const Router = StackNavigator({       
    Drawer:{
        screen:Drawer
    },
    Login:{
        screen:Login
    }
},{
    initialRouteName:'Login',
    headerMode:'none'
})
